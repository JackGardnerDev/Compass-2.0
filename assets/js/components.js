$(document).ready(function(){
  var openProjects = []; // array to store the IDs of the currently open projects

  function toggleProject(project) {
      var index = openProjects.indexOf(project);
      if (index === -1) {
          $(project).show("fast");
          openProjects.push(project);
      } else {
          openProjects.splice(index, 1);
          $(project).hide("fast");
      }
  }

  // Button 1
  $("#clock-button").click(function(){
      toggleProject(".clock-content");
  });

  // Button 2
  $("#calender-button").click(function(){
      toggleProject(".calender-content");
  });

  // Button 3
  $("#todo-button").click(function(){
      toggleProject(".todo-content");
  });

  // Button 4
  $("#weather-button").click(function(){
      toggleProject(".weather-content");
  });

  // Button 5
  $("#browse-button").click(function(){
      toggleProject(".browse-content");
  });

  // Button 6
  $("#options-button").click(function(){
      toggleProject(".options-content");
  });

  // Button 7
  $("#lighting-button").click(function(){
      toggleProject(".lighting-content");
  });

  // Hide all content when compass button is clicked
  $("#compass-button").click(function(){
      $(".clock-content, .calender-content, .todo-content, .weather-content, .browse-content, .options-content, .lighting-content").hide("fast");
      openProjects = []; // Clear the array of open projects
  });
});
