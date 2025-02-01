$(document).ready(function() {
    // Fetch fact of the day
    $.ajax({
        url: 'http://numbersapi.com/1/30/date?json',
        method: 'GET',
        success: function(response) {
            $('#factText').text(response.text);
        },
        error: function() {
            $('#factText').text('Failed to load fact of the day. Please try again later.');
        }
    });

    // Upload area functionality
    const uploadArea = $('#uploadArea');
    const fileInput = $('#fileInput');

    uploadArea.on('click', function() {
        fileInput.click();
    });

    uploadArea.on('dragover dragenter', function(e) {
        e.preventDefault();
        uploadArea.addClass('dragover');
    });

    uploadArea.on('dragleave dragend drop', function(e) {
        e.preventDefault();
        uploadArea.removeClass('dragover');
    });

    uploadArea.on('drop', function(e) {
        e.preventDefault();
        const files = e.originalEvent.dataTransfer.files;
        handleFiles(files);
    });

    fileInput.on('change', function() {
        handleFiles(this.files);
    });

    function handleFiles(files) {
        Array.from(files).forEach(file => {
            if (file.type.startsWith('image/')) {
                const formData = new FormData();
                formData.append('image', file);

                $.ajax({
                    url: '/api/upload',
                    method: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function(response) {
                        const img = $('<img>')
                            .addClass('uploaded-image')
                            .attr('src', response.path)
                            .attr('alt', 'Uploaded Image');
                        $('#imagePreview').append(img);
                    },
                    error: function() {
                        alert('Failed to upload image. Please try again.');
                    }
                });
            }
        });
    }
});