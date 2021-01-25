  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

const Header = (title, date, temp) => {
  const headerDiv = document.createElement('div');
  const dateSpan = document.createElement('span');
  const titleOne = document.createElement('h1');
  const tempSpan = document.createElement('span');
  
  // ADD CLASSNAMES
  headerDiv.className = 'header';
  dateSpan.className = 'date';
  tempSpan.className = 'temp';

  // ADD TEXT
  dateSpan.textContent = date;
  titleOne.textContent = title;
  tempSpan.textContent = temp;

 // CREATE HIERARCHY
  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(titleOne);
  headerDiv.appendChild(tempSpan);
  

  return headerDiv;

}

// console.log(Header)


//   TASK 2
//   ---------------------
//   Implement this function taking a css selector as its only argument.
//   It should create a header using the Header component above, passing arguments of your choosing.
//   It should append the header to the element in the DOM that matches the given selector.

const headerAppender = (selector) => {
  selector.forEach((selected) => {
    const headerComponent = selected('title', 'time', 'temp');
    const newHeader = document.querySelector('.header-container')
  })

}

export { Header, headerAppender }
