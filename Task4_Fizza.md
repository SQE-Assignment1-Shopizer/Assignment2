**Unit Testing of Quantity Selector**

**Framework Used**
--Jest 

**What is Jest?**

Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!

**Jest and Reactstorefront**

In reactstore front, testing is done using **jest** framework along with the dependency of_ babel, react, enzyme, mui/material_.

**DOM Testing**

The DOM (Document Object Model) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page
--In _reactstorefront_ DOM testing is done using jest. TO assert, and manipulate the rendered components they have imported react-testing-library, Enzyme, andReact's TestUtils which helps to use the components.

**Enzyme**

Jest and Enzyme are tools which are used in tandem to test React components, and are used in the C#Bot testing framework for unit tests of client-side component
Enzyme is a JavaScript testing utility for React which allows you to create instances of React components for testing purposes.
When using these components, you can search for elements via their class or id, and then click it (if the element is a button),
simulate key presses (if the element is a text box, or another type of element which can be modified through typing),
or get the text contained within that element.

**MUI**

MUI provides a simple, customizable, and accessible library of React components.

**Explaination of Code**

**
//imported libraries explained above


import React, { useState } from 'react'
import { mount } from 'enzyme'
import QuantitySelector from 'react-storefront/QuantitySelector'**


describe('QuantitySelector', () => {
  let wrapper,       **  //The wrapper is an object that is used to create and support basic UI elements based on the data - or prop values - provided.**
  
  name,
    addIcon,
    subtractIcon,
    minValue,
    maxValue,
    ariaLabel,
    quantity = 1,
    getValue,
    handleChange

**A function for setting all values to default**

  const clearValues = () => {
    wrapper.unmount()
    name = undefined
    addIcon = undefined
    subtractIcon = undefined
    minValue = undefined
    maxValue = undefined
    ariaLabel = undefined
    quantity = 1
    getValue = undefined
    handleChange = undefined
  }

**A test used for mounting**

  const Test = () => {
    const [value, setValue] = useState(quantity)  **//quantity is initial state, It returns a pair of values: the current state and a function that updates it. This is why we write const [count, setCount] = useState()**
  
  getValue = value

    return (
      <QuantitySelector
        minValue={minValue}
        maxValue={maxValue}
        onChange={handleChange ? value => handleChange(value, setValue) : undefined}
        addIcon={addIcon}
        subtractIcon={subtractIcon}
        name={name}
        ariaLabel={ariaLabel}
        value={value}
      />
    )
  }

**Test Cases**

  describe('should render component with default values', () => {
    afterEach(() => {        **After each case run in this file**
    
      clearValues()
    })

**TEST CASE 1 TO FIND OUT CORRECT LABELLING**

    it('should have right default aria labels', () => {
      wrapper = mount(<Test />)   **mounting is the process of outputting the virtual representation of a component into the final UI representation(DOM). In a browser that would mean outputting a React Element into an actual DOM element (e.g. an HTML div or li element) in the DOM tree.**
     
     const ariaLabelFinder = wrapper.findWhere(n => n.prop('aria-label'))

      expect(
        ariaLabelFinder
          .filterWhere(n => n.prop('aria-label').includes('subtract one quantity')) **//<button class="MuiButtonBase-root MuiIconButton-root jss230 jss232 MuiIconButton-sizeSmall" tabindex="0" type="button" aria-label="subtract one quantity"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root jss229" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg></span><span class="MuiTouchRipple-root"></span></button>**
         
         .exists(),
      ).toBe(true)
      expect(
        ariaLabelFinder
          .filterWhere(n => n.prop('aria-label').includes('add one quantity'))
          .exists(),
      ).toBe(true)
      expect(
        ariaLabelFinder.filterWhere(n => n.prop('aria-label').includes('does not exist')).exists(),
      ).toBe(false)
    })

**//TEST CASE 2 TO CHECK IF THE DEFAULT NAME IS CORRECT**

    it('should have right default name', () => {
      wrapper = mount(<Test />)

      expect(
        wrapper.findWhere(n => n.prop('name') && n.prop('name').includes('quantity')).exists(), **//<input name="quantity" aria-label="quantity" class="jss233 root subtract add input" readonly="" value="1">**
      
      ).toBe(true)
    })

**//TEST CASE 3 TO CHECK IF subtracting more than default min value IS NOT ALLOWED**

    it('should not allow subtracting more than default min value', () => {
      quantity = 1
      wrapper = mount(<Test />)

      wrapper
        .find('.MuiIconButton-root')
        .at(3)
        .simulate('click')

      expect(getValue).toBe(1)
    })

    it('should not allow adding more than default max value', () => {
      quantity = 100
      wrapper = mount(<Test />)

      wrapper
        .find('.MuiIconButton-root')
        .last()
        .simulate('click')

      expect(getValue).toBe(100)
    })

    it('should have right initial value', () => {
      quantity = undefined
      wrapper = mount(<Test />)

      expect(wrapper.find('input').prop('value')).toBe(1) **<input name="quantity" aria-label="quantity" class="jss233 root subtract add input" readonly="" value="1">**
    })
  })

  describe('should render component with custom values', () => {
    afterEach(() => {
      clearValues()
    })

**//Custom Value Test Cases**

    it('should trigger onChange fn on click', () => {
      handleChange = (value, setValue) => setValue(value)
      quantity = 1
      wrapper = mount(<Test />)

      wrapper
        .find('.MuiIconButton-root')
        .last()
        .simulate('click')

      expect(getValue).toBe(2)
    })

    it('should not allow adding more than custom max value', () => {
      maxValue = 200
      quantity = 200
      wrapper = mount(<Test />)

      wrapper
        .find('.MuiIconButton-root')
        .last()
        .simulate('click')

      expect(getValue).toBe(maxValue)
    })

    it('should not allow subtracting more than custom min value', () => {
      minValue = 100
      quantity = 100
      wrapper = mount(<Test />)

      wrapper
        .find('.MuiIconButton-root')
        .at(3)
        .simulate('click')

      expect(getValue).toBe(minValue)
    })

    it('should allow custom name', () => {
      name = 'testName'
      wrapper = mount(<Test />)

      expect(wrapper.findWhere(n => n.prop('name') && n.prop('name').includes(name)).exists()).toBe(
        true,
      )
    })

    it('should allow custom aria label', () => {
      ariaLabel = 'customAria'
      wrapper = mount(<Test />)
      const ariaLabelFinder = wrapper.findWhere(n => n.prop('aria-label'))

      expect(
        ariaLabelFinder
          .filterWhere(n => n.prop('aria-label').includes(`subtract one ${ariaLabel}`))
          .exists(),
      ).toBe(true)
      expect(
        ariaLabelFinder
          .filterWhere(n => n.prop('aria-label').includes(`add one ${ariaLabel}`))
          .exists(),
      ).toBe(true)
      expect(
        ariaLabelFinder.filterWhere(n => n.prop('aria-label').includes('does not exist')).exists(),
      ).toBe(false)
    })

    it('should allow custom add icon', () => {
      addIcon = <div id="testAddIcon" />
      wrapper = mount(<Test />)

      expect(wrapper.find('#testAddIcon').exists()).toBe(true)
    })

    it('should allow custom subtract icon', () => {
      subtractIcon = <div id="testSubtractIcon" />
      wrapper = mount(<Test />)

      expect(wrapper.find('#testSubtractIcon').exists()).toBe(true)
    })
  })
})
