import {API, Auth} from 'aws-amplify';

export default class Amplify {
  constructor(apiName) {
    this.apiName = apiName
    return this.instance;
  }

  /**
   * Head Request
   * @param {string} url
   * @param {object} config
   */
  async head(url, config = {}) {
    return API.head(this.apiName, url, config);
  }

  /**
   * GET Request
   * @param {string} url
   * @param {object} config
   */
  async get(url, config = {}) {
    return API.get(this.apiName, url, config);
  }

  /**
   * POST Request
   * @param {string} url
   * @param {object} config
   */
  async post(url, data = {}, config = {}) {
    config.body = data
    return API.post(this.apiName, url, config);
  }

  /**
   * PATCH Request
   * @param {string} url
   * @param {object} config
   */
  async patch(url, data = {}, config = {}) {
    config.body = data
    return API.patch(this.apiName, url, config);
  }

  /**
   * PUT Request
   * @param {string} url
   * @param {object} config
   */
  async put(url, data = {}, config = {}) {
    config.body = data
    return API.put(this.apiName, url, config);
  }

  /**
   * DELETE Request
   * @param {string} url
   * @param {object} config
   */
  async delete(url, data = {}, config = {}) {
    config.body = data
    return API.del(this.apiName, url, config);
  }
}
