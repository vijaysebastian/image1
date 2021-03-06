function changeProfilePicture()
{
    var selectedImg = $('#profilePicture')[0].files[0];

    if (selectedImg)
    {
        var previewId = document.getElementById('profileImage');
        previewId.src = '';

        var oReader = new FileReader();
        oReader.onload = function(e)
        {
            previewId.src=e.target.result;
        }
        oReader.readAsDataURL(selectedImg);

        $('#uploadButton').removeClass('disabled');
    }
}

function uploadProfilePicture()
{
    var file2 = document.getElementById("profilePicture").files[0];
    var ext = file2.type;
    var about = $('#aboutMe').val();
    var formdata = new FormData();
    formdata.append("pic", file2);
    formdata.append("ext", ext);
    formdata.append("about", about);  // {'pic': file2, 'ext': ext, 'about':about}
    var ajax = new XMLHttpRequest();
    ajax.upload.addEventListener("progress", progressHandler, false);
    ajax.addEventListener("load", completeHandler, false);
    ajax.open("POST", "http://b2.com/updateProfile");
    ajax.send(formdata);

}

function completeHandler(event)
{
    var response = this.responseText;
   alert('Profile Saved!');
    window.location='http://b2.com/profile';
}
function progressHandler(event)
{
    var percent = (event.loaded / event.total) * 100;
    $('#mediaProgress').fadeIn();
    document.getElementById('progressBar').style.width = percent+'%';
}