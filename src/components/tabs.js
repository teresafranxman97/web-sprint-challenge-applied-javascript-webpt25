  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>

import axios from "axios";

  //
const Tabs = (topics) => {
  const topic = document.createElement('div');
  const tabOne = document.createElement('div');
  const tabTwo = document.createElement('div');
  const tabThree = document.createElement('div');


  topic.className = 'topics';
  tabOne.className = 'tab';
  tabTwo.className = 'tab';
  tabThree.className = 'tab';


  tabOne.textContent = `${topics}`
  tabTwo.textContent = `${topics}`;
  tabThree.textContent = `${topics}`;


  topic.appendChild(tabOne);
  topic.appendChild(tabTwo);
  topic.appendChild(tabThree);

  return topic;
}
// console.log(Tabs())

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then((response) => {
      console.log(response.data);
      response.data.topics.forEach((topic) => {
        const tabsComponent = Tabs(topic);
        const newTab = document.querySelector('.tabs-container');
        newTab.appendChild(Tabs(topic))
      })
    })

    .catch((error) => {
      console.log('error', error);
    })
}

console.log(Tabs(tabsAppender('.tabs-container')));

export { Tabs, tabsAppender }
