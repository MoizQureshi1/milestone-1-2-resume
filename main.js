var _a;
// LISTING ELEMENT
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // TYPE ASSERTION
    var profilePictureInput = document.getElementById('profilePicture');
    if (profilePictureInput) {
        // Picture element
        var profilePicturefile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePicturefile ? URL.createObjectURL(profilePicturefile) : "";
        // CREATE RESUME OUTPUT
        var resumeOutPut = "\n         <h2>Resume</h2>\n         ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n        ");
    }
});
