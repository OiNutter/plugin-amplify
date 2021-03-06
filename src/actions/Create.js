import AmplifyAPI from '../orm/amplify-api';
import Action from './Action'
import Context from '../common/context'

export default class Create extends Action {
  /**
   * Call $create method
   * @param {object} store
   * @param {object} params
   */
  static async call ({ state, commit }, params = {}) {
    if(!params.data || typeof params !== 'object') {
      throw new TypeError("You must include a data object in the params to send a POST request", params)
    }

    const context = Context.getInstance();
    const model = context.getModelFromState(state);
    const endpoint = Action.transformParams('$create', model, params);
    const api =  new AmplifyAPI(model.methodConf.http.apiName);
    const request = api.post(endpoint, params.data, model.methodConf.http);

    this.onRequest(commit);
    request
      .then(data => this.onSuccess(commit, model, data))
      .catch(error => this.onError(commit, error))

    return request;
  }

  /**
   * On Request Method
   * @param {object} commit
   */
  static onRequest(commit) {
    commit('onRequest');
  }

  /**
   * On Successful Request Method
   * @param {object} commit
   * @param {object} model
   * @param {object} data
   */
  static onSuccess(commit, model, data) {
    commit('onSuccess')
    model.insertOrUpdate({
      data,
    });
  }

  /**
   * On Failed Request Method
   * @param {object} commit
   * @param {object} error
   */
  static onError(commit, error) {
    commit('onError', error)
  }
}
