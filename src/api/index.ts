import { createAlova } from 'alova';
import fetchAdapter from 'alova/fetch';
import { createApis, withConfigType } from './createApis';
import VueHook from "alova/vue";

export const alovaInstance = createAlova({
  baseURL: 'https://m1.apifoxmock.com/m1/7747184-7492104-default',
  statesHook: VueHook,
  requestAdapter: fetchAdapter(),
  responded: res => {
    return res.json();
  }
});

export const $$userConfigMap = withConfigType({});

const Apis = createApis(alovaInstance, $$userConfigMap);

// mountApis(Apis);

export default Apis;
