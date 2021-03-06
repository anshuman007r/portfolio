import read from '../controllers/readController'

export default (app) => {
    app.route('/')
    .get(read.homepage)
};
