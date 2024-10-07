
document.getElementById('sidebar-toggle').addEventListener('click', showSidebar);
document.getElementById('hide-sidebar').addEventListener('click', hideSidebar);


function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
    
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
    
}

// Select all links in the sidebar
const sidebarLinks = document.querySelectorAll('.sidebar a');

// Add click event listener to each link in the sidebar
sidebarLinks.forEach(link => {
    link.addEventListener('click', hideSidebar);
});