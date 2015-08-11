var oTable=null;
$(document).ready(function()
{
    oTable = $('#allBlogs').dataTable({
        "ajax": 'get-categorys',
        "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "All"]]
    });

});
