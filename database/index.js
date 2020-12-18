'use strict'

const setupDatabase = require('./lib/db')

const setupUsersModel = require('./models/users')
const setupCoursesModel = require('./models/courses')
const setupLpDoneModel = require('./models/LP_done')
const setupSkillsModel = require('./models/skills')
const setupSkillsUsersModel = require('./models/skills_user')
const setupSkillsCoursesModel = require('./models/skills_courses')
const setupChallengeModel = require('./models/challenges')
const setupCategoriesModel = require('./models/categories')
const setupChallengesCategoriesModel = require('./models/challenges_categories')
const setupSkillsChallengesModel = require('./models/skills_challenges')
const setupLearningPathModel = require('./models/learningPath')
const setupWorksModel = require('./models/works')

const defaults = require('defaults')

const setupUsers = require('./lib/users')
const setupCourses = require('./lib/courses')
const setupLpDone = require('./lib/LP_done')
const setupSkills = require('./lib/skills')
const setupSkillsUsers = require('./lib/skills_user')
const setupSkillsCourses = require('./lib/skills_courses')
const setupChallenge = require('./lib/challenges')
const setupCategories = require('./lib/categories')
const setupChallengesCategories = require('./lib/challenges_categories')
const setupSkillsChallenges = require('./lib/skills_challenges')
const setupLearningPath = require('./lib/learningPath')
const setupWorks = require('./lib/works')

module.exports = async function (config) {
  config = defaults(config, {
    dialect: 'postgres',
    pools: {
      max: 10,
      min: 0,
      idle: 10000
    },
    query: {
      raw: true
    }
  })

  const sequelize = setupDatabase(config)

  const usersModel = setupUsersModel(config)
  const coursesModel = setupCoursesModel(config)
  const lpDoneModel = setupLpDoneModel(config)
  const skillsModel = setupSkillsModel(config)
  const skillsUsersModel = setupSkillsUsersModel(config)
  const skillsCoursesModel = setupSkillsCoursesModel(config)
  const challengeModel = setupChallengeModel(config)
  const categoriesModel = setupCategoriesModel(config)
  const challengeCategoriesModel = setupChallengesCategoriesModel(config)
  const skillsChallengesModel = setupSkillsChallengesModel(config)
  const learningPathModel = setupLearningPathModel(config)
  const worksModel = setupWorksModel(config)

  // Courses
  coursesModel.belongsTo(categoriesModel)

  // Lp_done
  lpDoneModel.belongsTo(usersModel)
  lpDoneModel.belongsTo(coursesModel)

  // skills-user
  skillsUsersModel.belongsTo(usersModel)
  skillsUsersModel.belongsTo(skillsModel)

  // skills-courses
  skillsCoursesModel.belongsTo(coursesModel)
  skillsCoursesModel.belongsTo(skillsModel)

  // challenge-categories
  challengeCategoriesModel.belongsTo(challengeModel)
  challengeCategoriesModel.belongsTo(categoriesModel)

  // skills-challenge
  skillsChallengesModel.belongsTo(skillsModel)
  skillsChallengesModel.belongsTo(categoriesModel)

  // learningPath
  learningPathModel.belongsTo(usersModel)
  learningPathModel.belongsTo(coursesModel)

  // works
  usersModel.hasMany(worksModel)

  await sequelize.authenticate()

  await sequelize.sync()
  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const users = setupUsers(usersModel)
  const courses = setupCourses(coursesModel)
  const lpDone = setupLpDone(lpDoneModel)
  const skills = setupSkills(skillsModel)
  const skillsUsers = setupSkillsUsers(skillsUsersModel)
  const skillsCourses = setupSkillsCourses(skillsCoursesModel)
  const challenges = setupChallenge(challengeModel)
  const categories = setupCategories(categoriesModel)
  const challengesCategories = setupChallengesCategories(challengeCategoriesModel)
  const skillsChallenges = setupSkillsChallenges(skillsChallengesModel)
  const learningPath = setupLearningPath(learningPathModel)
  const works = setupWorks(worksModel)

  return {
    users,
    courses,
    lpDone,
    skills,
    skillsUsers,
    skillsCourses,
    challenges,
    categories,
    challengesCategories,
    skillsChallenges,
    learningPath,
    works
  }
}
