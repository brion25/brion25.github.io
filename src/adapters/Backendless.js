// Using CDN fiel since the NPM package is broken for Web
const { Backendless } = window

Backendless.initApp(BACKENDLESS_APP_ID, BACKENDLESS_API_KEY)

class BackendlessAdapter {
    /**
   * Function to get an storage from a model name
   * @param {String} model
   * @returns {*|DataStore}
   */
    static getStorage(model) {
        return Backendless.Data.of(model)
    }

    /**
   * Function to returns a new query
   * @param {Object} options
   * @returns {*|DataQuery}
   */
    static createQuery(options = {}) {
        const query = Backendless.DataQueryBuilder.create()

        if (options.sortBy) {
            query.setSortBy(options.sortBy)
        }

        if (options.where) {
            query.setWhereClause(options.where)
        }

        return query
    }

    /**
   * Function to get Data from an storage
   * @param {String} model
   * @param {Object} options
   * @returns {Promise}
   */
    getStorageData(model, options = {}) {
        const storage = BackendlessAdapter.getStorage(model)
        const query = BackendlessAdapter.createQuery(options)

        return storage.find(query)
    }
}

export default BackendlessAdapter
