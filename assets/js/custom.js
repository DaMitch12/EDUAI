fetch('assets/data/data.json')
  .then(response => response.json())
  .then(data => {
    const jobs = data.jobs;
    jobs.forEach(job => {
      const option = document.createElement('option');
      option.value = job.title;
      option.text = job.title;
      document.getElementById('jobSelect').add(option);
    });

    document.getElementById('userJobForm').addEventListener('submit', function (event) {
      event.preventDefault();
      const selectedJob = document.getElementById('jobSelect').value;
      const jobInfo = jobs.find(job => job.title === selectedJob);
      if (jobInfo) {
        document.getElementById('employeeStat').innerText = jobInfo.stat;
        document.getElementById('jobForm').classList.add('hidden');
        document.getElementById('welcomeMessage').classList.remove('hidden');

        document.getElementById('seeCoursesBtn').addEventListener('click', function () {
          const [bubbleText, detailText] = jobInfo.use.split(';');
          document.getElementById('courseBubble').innerText = bubbleText;
          document.getElementById('courseDetail').innerText = detailText;
          document.getElementById('welcomeMessage').classList.add('hidden');
          document.getElementById('coursesMessage').classList.remove('hidden');
        });
      }
    });
  })
  .catch(error => console.error('Error fetching the data:', error));
