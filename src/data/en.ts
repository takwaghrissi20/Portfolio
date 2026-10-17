import * as cv from './cv'

/** English content bundle. French lives in fr.ts and must match this shape. */
export const en = {
  title: cv.profile.title,
  tagline: cv.profile.tagline,
  intro: cv.profile.intro,
  location: cv.profile.location,
  replyBy: cv.profile.replyBy,
  topics: cv.topics,
  about: cv.about,
  heroRoles: cv.heroRoles,
  stats: cv.stats,
  strengths: cv.strengths,
  experience: cv.experience,
  projects: cv.projects,
  skills: cv.skills,
  education: cv.education,
  certifications: cv.certifications,
  languages: cv.languages,
}

export type Content = typeof en
