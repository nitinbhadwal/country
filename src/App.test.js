import React from 'react';
import App from './App';
import axios from "axios";
import { shallow } from 'enzyme';
import { dataFetch, API } from './DataFetch';

const wrapper = shallow(<App />);

// Test Case 1
it('Input element for search country', () => {
  expect(wrapper.find('input#search')).toHaveLength(1);
});

// Test Case 2
it('Toal count returned from the api response', () => {
  expect(wrapper.find('input#totalcount')).toHaveLength(1);
});

// Test Case 3
it('Dropdown for country limit', () => {
  expect(wrapper.find('select#limit')).toHaveLength(1);
});



// TEST CASES FOR THE API RESPONSES

jest.mock('axios');

describe('dataFetch', () => {

  // Test Case 4
  it('Fetch country data from the API limit 10 for page 1 with the search keyword - ind', async () => {
    const data = {
      headers: {
        Authorization: "d%#@##@ds93432$#%^#$#Dfdfd$%@#@)IOIkjkj&*$%^%GFGD"
      }
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(dataFetch('ind')).resolves.toEqual(data);
    expect(axios.get).toHaveBeenCalledWith(
      `${API}/?page=1&limit=10&country=ind`,
    );
  });


  // Test Case 5
  it('fetches country data from the API with error', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
  });

});
