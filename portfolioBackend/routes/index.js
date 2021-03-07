
import contact from '../controllers/contactController'
import project from '../controllers/projectController'
import home from '../controllers/homeController'
import about from '../controllers/aboutController'

export default (app) => {
    app.route('/')
    .get(home.getHomeData)
    .post(home.createHomeData)
    .put(home.updateHomeData)

    app.route('/contact')
    .get(contact.getContactData)
    .post(contact.createContactData)
    .put(contact.updateContactData)

    app.route('/project')
    .get(project.getAllProjects)
    .post(project.createProject)
    .put(project.updateProject)

    app.route('/project/:projectId')
    .delete(project.deleteProject)

    app.route('/contact')
    .get(contact.getContactData)
    .post(contact.createContactData)
    .put(contact.updateContactData)

    app.route('/about')
    .get(about.getAboutData)

    app.route('/about/:type')
    .post(about.createAboutData)
    .put(about.updateAboutData)
};
