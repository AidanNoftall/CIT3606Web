function changeLandmark(landmark) {
    const image = document.getElementById('landmarkImage');
    const descriptionDiv = document.getElementById('description');
    const mapFrame = document.getElementById('mapFrame');

    if (landmark === 'rushmore') {
        image.src = 'Mount Rushmore.jpg';
        descriptionDiv.innerHTML = 'Mount Rushmore is a very large scale sculpture that is carved into Mount Rushmore in the Black Hills region of South Dakota. It is a very cool spot to visit!';
        mapFrame.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1558.756194200147!2d-103.45330386760634!3d43.879109395270116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x877d174783307525%3A0x6a20d5dfc674251!2sMount%20Rushmore%20National%20Memorial!5e0!3m2!1sen!2sus!4v1700684693339!5m2!1sen!2sus';
    
    } else if (landmark === 'Colosseum') {
        image.src = 'Colosseum.jpg';
        descriptionDiv.innerHTML = 'The Colosseum is also known as the Flavian Amphitheatre. It is an ancient amphitheater located in Rome, Italy, and is one of the greatest works of Roman architecture and engineering from that time in history. It is definitely worth visiting!';
        mapFrame.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.122888507927!2d12.489650612042881!3d41.89021416453505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28f1c82e908503c4!2sColosseum!5e0!3m2!1sen!2sus!4v1758727824666!5m2!1sen!2sus';
    
    } else if (landmark === 'easterIsland') {
        image.src = 'Easter Island Statues.jpg';
        descriptionDiv.innerHTML = 'The Easter Island statues have always fascinated people. They are monolithic human figures carved by the Rapa Nui people on Easter Island. This island can be found in eastern Polynesia. It is a very remote island, but it is worth the trip to see these amazing statues!';
        mapFrame.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14870.368307223023!2d-109.43981881773099!3d-27.11586938971488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91300995f7004f81%3A0x63351939dd90605a!2sMoai%20Statues!5e0!3m2!1sen!2sus!4v1700684784742!5m2!1sen!2sus';
    }
}

function changeSize() {
    const selectMenu = document.getElementById('sizeSelect');
    const image = document.getElementById('landmarkImage');
    const size = selectMenu.value;

    if (size === 'small') {
        image.width = 300;
    } else if (size === 'medium') {
        image.width = 500;
    } else if (size === 'large') {
        image.width = 800;
    }
}