import { useEffect, useRef, useState } from "react";
import { Box, Flex, Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { LuArrowUpRight, LuExternalLink, LuGitBranch, LuLayers } from "react-icons/lu";
import { featuredProjects, moreProjects, profile, type Project } from "../data/profile";
import { EASE, Reveal } from "./ui/motion";
import { Flow, Rich, Section, SectionHeading, SpotlightCard, TechChip } from "./ui/primitives";

const ProjectLinks = ({ project }: { project: Project }) => (
  <HStack spacing={2} flexWrap="wrap">
    {project.links.code && (
      <a className="btn btn-sm btn-ghost" href={project.links.code} target="_blank" rel="noopener noreferrer">
        <FaGithub aria-hidden="true" /> View code
        <LuArrowUpRight className="shift" aria-hidden="true" />
      </a>
    )}
    {project.links.live && (
      <a className="btn btn-sm btn-primary" href={project.links.live} target="_blank" rel="noopener noreferrer">
        Live site <LuExternalLink aria-hidden="true" />
      </a>
    )}
  </HStack>
);

const FeaturedCard = ({ project, index, wide }: { project: Project; index: number; wide: boolean }) => (
  <SpotlightCard as="article" className="card-lift" p={{ base: 6, md: 8 }} h="100%">
    <Grid templateColumns={{ base: "minmax(0,1fr)", lg: wide ? "minmax(0,1.15fr) minmax(0,0.85fr)" : "minmax(0,1fr)" }} gap={{ base: 6, lg: wide ? 10 : 6 }} h="100%">
      <Flex direction="column" minW={0}>
        <Flex justify="space-between" align="center" gap={3} mb={5} wrap="wrap">
          <HStack spacing={3}>
            <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="tag">{project.category}</span>
          </HStack>
          {project.period && <span className="mono-sm">{project.period}</span>}
        </Flex>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-tagline">{project.tagline}</p>

        {!wide && project.flow && (
          <Box className="flow-panel" mt={6}>
            <div className="flow-label">
              <LuLayers aria-hidden="true" /> Architecture
            </div>
            <Flow nodes={project.flow} vertical />
          </Box>
        )}

        {project.bullets && (
          <Box mt={6}>
            <ul className="bullets">
              {project.bullets.map((b) => (
                <li key={b.slice(0, 32)}>
                  <Rich text={b} />
                </li>
              ))}
            </ul>
          </Box>
        )}

        <Box mt={6} className="chips">
          {project.stack.map((t) => (
            <TechChip key={t} name={t} />
          ))}
        </Box>

        <Box mt="auto" pt={7}>
          <ProjectLinks project={project} />
        </Box>
      </Flex>

      {wide && project.flow && (
        <Box className="flow-panel" alignSelf="center" p={{ base: 4, md: 6 }}>
          <div className="flow-label">
            <LuLayers aria-hidden="true" /> Architecture
          </div>
          <Flow nodes={project.flow} vertical />
        </Box>
      )}
    </Grid>
  </SpotlightCard>
);

/* -------------------------------------------------------------------------- */
/* Live GitHub activity                                                       */
/* -------------------------------------------------------------------------- */

type Repo = {
  name: string;
  html_url: string;
  language: string | null;
  pushed_at: string;
  fork: boolean;
};

type GitHubData = {
  repoCount: number;
  since: number;
  languages: [string, number][];
  recent: Repo[];
  live: boolean;
};

const FALLBACK: GitHubData = { repoCount: 25, since: 2021, languages: [], recent: [], live: false };
const CACHE_KEY = "gh-activity-v1";

const timeAgo = (iso: string) => {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (days < 1) return "today";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
};

const useGitHubActivity = (user: string, enabled: boolean) => {
  const [data, setData] = useState<GitHubData>(FALLBACK);

  useEffect(() => {
    if (!enabled) return;
    try {
      const cached = sessionStorage.getItem(CACHE_KEY);
      if (cached) {
        setData(JSON.parse(cached));
        return;
      }
    } catch {
      /* storage unavailable — fall through to fetch */
    }

    const controller = new AbortController();
    const api = "https://api.github.com";
    Promise.all([
      fetch(`${api}/users/${user}`, { signal: controller.signal }).then((r) => (r.ok ? r.json() : Promise.reject(r))),
      fetch(`${api}/users/${user}/repos?per_page=100&sort=pushed`, { signal: controller.signal }).then((r) =>
        r.ok ? r.json() : Promise.reject(r)
      ),
    ])
      .then(([userInfo, repos]: [{ public_repos: number; created_at: string }, Repo[]]) => {
        const own = repos.filter((r) => !r.fork && r.name.toLowerCase() !== user.toLowerCase());
        const counts = new Map<string, number>();
        own.forEach((r) => r.language && counts.set(r.language, (counts.get(r.language) ?? 0) + 1));
        const next: GitHubData = {
          repoCount: userInfo.public_repos,
          since: new Date(userInfo.created_at).getFullYear(),
          languages: [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5),
          recent: own.slice(0, 4),
          live: true,
        };
        setData(next);
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify(next));
        } catch {
          /* ignore */
        }
      })
      .catch(() => {
        /* rate-limited or offline — keep the fallback */
      });

    return () => controller.abort();
  }, [user, enabled]);

  return data;
};

const GitHubActivity = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "200px" });
  const data = useGitHubActivity(profile.links.githubUser, inView);
  const maxCount = Math.max(1, ...data.languages.map(([, n]) => n));

  return (
    <Reveal>
      <Box ref={ref} mt={5}>
        <SpotlightCard p={{ base: 6, md: 8 }}>
          <Grid templateColumns={{ base: "minmax(0,1fr)", lg: "minmax(0,0.9fr) minmax(0,1fr) minmax(0,1fr)" }} gap={{ base: 8, lg: 10 }} alignItems="start">
            <Box>
              <HStack spacing={3} mb={4}>
                <span className="icon-tile">
                  <FaGithub aria-hidden="true" />
                </span>
                <span className="eyebrow">{data.live ? "Live from GitHub" : "On GitHub"}</span>
              </HStack>
              <Text fontSize="5xl" fontWeight={600} letterSpacing="-0.04em" lineHeight={1}>
                {data.repoCount}
              </Text>
              <Text mt={2} color="var(--text-muted)" fontSize="sm">
                public repositories · building in public since {data.since}
              </Text>
              <Box mt={6}>
                <a className="btn btn-sm btn-ghost" href={profile.links.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub aria-hidden="true" /> @{profile.links.githubUser}
                  <LuArrowUpRight className="shift" aria-hidden="true" />
                </a>
              </Box>
            </Box>

            <Box>
              <Text className="eyebrow" mb={4}>
                Top languages · repos
              </Text>
              {data.languages.length > 0 ? (
                <div className="bar-list">
                  {data.languages.map(([lang, count], i) => (
                    <div className="bar-row" key={lang} title={`${lang}: ${count} repos`}>
                      <span className="bar-label">{lang}</span>
                      <div className="bar-track">
                        <motion.div
                          className="bar-fill"
                          style={{ width: `${(count / maxCount) * 100}%` }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }}
                        />
                      </div>
                      <span className="bar-value">{count}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <Text color="var(--text-muted)" fontSize="sm" lineHeight={1.7}>
                  Python, Java, TypeScript and more — browse the full list on my profile.
                </Text>
              )}
            </Box>

            <Box>
              <Text className="eyebrow" mb={4}>
                Recently pushed
              </Text>
              {data.recent.length > 0 ? (
                <Box display="grid" gap={2}>
                  {data.recent.map((repo) => (
                    <a key={repo.name} className="repo-row" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      <HStack spacing={3} minW={0}>
                        <LuGitBranch aria-hidden="true" style={{ flexShrink: 0, color: "var(--text-faint)" }} />
                        <Text fontSize="sm" noOfLines={1}>
                          {repo.name}
                        </Text>
                      </HStack>
                      <span className="mono-sm" style={{ whiteSpace: "nowrap" }}>
                        {timeAgo(repo.pushed_at)}
                      </span>
                    </a>
                  ))}
                </Box>
              ) : (
                <Text color="var(--text-muted)" fontSize="sm" lineHeight={1.7}>
                  Recent activity loads live from the GitHub API.
                </Text>
              )}
            </Box>
          </Grid>
        </SpotlightCard>
      </Box>
    </Reveal>
  );
};

/* -------------------------------------------------------------------------- */

const Projects = () => (
  <Section id="projects">
    <SectionHeading
      index="03"
      eyebrow="Projects"
      title={
        <>
          Things I've <span className="serif grad-text">built</span>.
        </>
      }
      subtitle="Distributed systems, ML-powered products and full-stack apps — each with the architecture behind it."
    />

    <Grid templateColumns={{ base: "minmax(0,1fr)", lg: "repeat(2, minmax(0,1fr))" }} gap={5}>
      {featuredProjects.map((project, i) => (
        <GridItem key={project.id} colSpan={{ base: 1, lg: i === 0 ? 2 : 1 }}>
          <Reveal delay={i === 0 ? 0 : (i - 1) * 0.08} style={{ height: "100%" }}>
            <FeaturedCard project={project} index={i} wide={i === 0} />
          </Reveal>
        </GridItem>
      ))}
    </Grid>

    <Reveal>
      <Text className="eyebrow" mt={16} mb={5}>
        More projects
      </Text>
    </Reveal>
    <Grid templateColumns={{ base: "minmax(0,1fr)", md: "repeat(2, minmax(0,1fr))", xl: "repeat(4, minmax(0,1fr))" }} gap={4}>
      {moreProjects.map((project, i) => (
        <Reveal key={project.id} delay={i * 0.06} style={{ height: "100%" }}>
          <SpotlightCard as="article" className="card-lift" p={6} h="100%" display="flex" flexDirection="column">
            <Flex justify="space-between" align="center" mb={4}>
              <span className="tag">{project.category}</span>
              <HStack spacing={1}>
                {project.links.code && (
                  <a className="icon-btn" style={{ width: 34, height: 34 }} href={project.links.code} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} source code`}>
                    <FaGithub />
                  </a>
                )}
                {project.links.live && (
                  <a className="icon-btn" style={{ width: 34, height: 34 }} href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live site`}>
                    <LuExternalLink />
                  </a>
                )}
              </HStack>
            </Flex>
            <h3 className="mini-title">{project.title}</h3>
            <Text mt={2} fontSize="sm" color="var(--text-muted)" lineHeight={1.7}>
              {project.tagline}
            </Text>
            <Box mt="auto" pt={5} className="chips">
              {project.stack.map((t) => (
                <TechChip key={t} name={t} />
              ))}
            </Box>
          </SpotlightCard>
        </Reveal>
      ))}
    </Grid>

    <GitHubActivity />
  </Section>
);

export default Projects;
