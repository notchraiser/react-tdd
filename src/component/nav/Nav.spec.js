import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';
import { FindByTestAttr } from '../../../utils/index';

const setUp = (props={}) => {
    return shallow(<Nav {...props} />);
}

describe('Nav Component', () => {
    let component;
    beforeEach(()=>{
        component = setUp();
    })

    it('Should render without errors' , () => {
        // const component = setUp();
        //  console.log(component.debug())
        const navcomponent = FindByTestAttr(component,'navcomponent');
        expect(navcomponent.length).toBe(1);
    });
    it('Should render fb logo' , () => {
        // const component = setUp();
        // console.log(component.debug())
        const fblogo = FindByTestAttr(component,'fb');
        expect(fblogo.length).toBe(1);
    })    
})