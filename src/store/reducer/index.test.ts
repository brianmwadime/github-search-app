import {initialState, reducer} from "./index";

describe('reducer', () => {
  describe('app state', () => {
    it('has intial state', () => {
      expect(reducer(undefined,{})).toEqual(undefined)
    })

    it('handles LOGIN', () => {
      const payload = {
        isAuthenticated: true,
        accessToken: "anaccesstoken",
       
      }
      expect(reducer({},{type: 'LOGIN', payload})).toEqual({
        isAuthenticated: true,
        accessToken: "anaccesstoken",
        
      });
    });
  });
});