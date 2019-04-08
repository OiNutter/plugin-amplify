import { Auth } from 'aws-amplify';

import VuexOrmAmplify from './vuex-orm-amplify';


export default class VuexOrmAmplifyPlugin {
  /**
   * This is called, when VuexORM.install(VuexOrmAmplify, options) is called.
   *
   * @param {Components} components The Vuex-ORM Components collection
   * @param {Options} options The options passed to VuexORM.install
   * @returns {VuexOrmAxios}
   */
  static install(components, options) {
    return new VuexOrmAmplify(components, options);
  }

  static async logout() {
    await Auth.signOut({ global: true });
  }
}
