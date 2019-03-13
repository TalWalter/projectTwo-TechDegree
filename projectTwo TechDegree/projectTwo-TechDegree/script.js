
// Unit 2 Project TechDegree 

// Select all the 'li' elements with the class 'student-item' and add them to a variable named studentList.
const studentList = document.querySelectorAll('.student-item');



const showPage = (list, page) => {
// Loop over items in the list parameter 
  for (let i = 0; i < list.length ; i++) {
// Determining how many students can be viewed per page    
    const max = (page * 10) -1;
    const base = (page * 10) - 10;
// Display correct amount of students & hide the rest.  
    if (i >= base && i <= max) {
      list[i].style.display = "block";
    } else {
        list[i].style.display = "none";
    }
  }
}



const appendPageLinks = (list) => {
// Determining how many pages are needed 
  const totalPages = Math.ceil(list.length / 10);
// Create a div that will contain your pagination links
  const newDiv = document.createElement('div');
  newDiv.className = 'pagination';
// Select your newDiv's parentNode and append newDiv  
  const pageDiv =  document.querySelector('.page');
  pageDiv.appendChild(newDiv);
// Create the list that will contain your pagination links 
  const ul = document.createElement('ul');
  newDiv.appendChild(ul);
// for every page, add li and a tags with the page number text
  for (i = 1; i <= totalPages; i ++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = i + '';
    li.appendChild(a);
    ul.appendChild(li);
  }
  
// Select all of your 'links' (so your 'a' elements) this will help you when calling your eventListner.
  const aTags = document.querySelectorAll('a');
// Add an event listener to each a tag, use a for loop inorder to go through all of them 
  for (let i = 0; i < aTags.length; i ++) {  
    aTags[i].addEventListener('click', (e) => {
// REMOVE active class      
      for (let i = 0; i < aTags.length; i ++) {
        aTags[i].classList.remove('active');
      }
      showPage(studentList, i + 1);
// ADD active class
      e.target.className = 'active';
    }); 
    
  }
}


showPage(studentList, 1);
appendPageLinks(studentList);



