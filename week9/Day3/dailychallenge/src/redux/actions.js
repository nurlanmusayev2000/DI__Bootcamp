import axios from 'axios';

const setSearchField = (text) => ({
  type: 'CHANGE_SEARCH_FIELD',
  payload: text,
});

const RobotsData = (data) => ({
  type: 'GET_DATA',
  payload: {
    roboData: data,
  },
});

const robotsApi = () => {

  return (dispatch) => {
    // !! loading action ve error action elave et
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log('inside fetch ', res.data);
        dispatch(RobotsData(res.data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};

export { setSearchField, robotsApi };
