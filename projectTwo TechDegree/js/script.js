/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/


const studentList = document.querySelectorAll('.student-item');
const pageDiv =  document.querySelector('.page');

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

const showPage = (list, page) => {
  for (let i = 0; i < list.length ; i++) {
    const max = (page * 10) -1;
    const base = (page * 10) - 10;
    if (i >= base && i <= max) {
      list[i].style.display = "block";
    } else {
        list[i].style.display = "none";
    }
  }
}

showPage(studentList, 1);

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
  let totalPages = Math.ceil(studentList.length / 10);
  let newDiv = document.createElement('div');
  newDiv.className = 'pagination';
  pageDiv.appendChild(newDiv);
  
  let ul = document.createElement('ul');
  newDiv.appendChild(ul);

  for (let i = 0; i < totalPages.length; i ++) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.textContent = totalPages[i];
    ul.appendChild(li);
    li.appendChild(a);
  }

}

pageDiv.addEventListener('click', (e) => {
  if (e.target.tagName === 'a') {
    showPage(studentList, totalPages[i]);
  }
});

appendPageLinks(studentList);



// Remember to delete the comments that came with this file, and replace them with your own code comments.