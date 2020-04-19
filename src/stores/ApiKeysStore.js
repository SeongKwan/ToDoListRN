import { observable, action } from 'mobx';

class ApiKeysStore {
    @observable testTitle = 'Wow, guys! this is Skin head Uncle!!!';
    @observable counter = 0;
    @action pressCounter() {
        return this.counter++;
    }
    @action clear() {
        this.counter = 0;
    }
}

export default new ApiKeysStore()