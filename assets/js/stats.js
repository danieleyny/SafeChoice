const shareButtons = [
  {
    id: 'share-button',
    title: '1 in 5 People In The US Have An STI. Something Must Be Done',
    url: 'https://safechoiceusa.com/articles/1 in 5 People In The US Have An STI. Something Must Be Done..html'
  },
  {
    id: 'share-button2',
    title: '1 in 4 college students has an STI… We need to do something.',
    url: 'https://safechoiceusa.com/articles/1-in-4-college-students-has-an-STI-We-need-to-do-something...html'
  },
  {
    id: 'share-button3',
    title: 'Sexually transmitted diseases are highest in the LGBTQ community',
    url: 'https://safechoiceusa.com/articles/Sexually%20transmitted%20diseases%20are%20highest%20in%20the%20LGBTQ%20community.html'
  },
  {
    id: 'share-button4',
    title: 'The STD Epidemic Affecting America’s Youth',
    url: 'https://safechoiceusa.com/articles/The%20STD%20Epidemic%20Affecting%20America%E2%80%99s%20Youth.html'
  },
  {
    id: 'share-button5',
    title: 'Effect of condom availability programs',
    url: 'https://safechoiceusa.com/articles/Effect of condom availability programs.html'
  },

  {
    id: 'share-button6',
    title: 'Benefits of emergency contraceptives',
    url: 'https://safechoiceusa.com/articles/Benefits of emergency contraceptives.html'
  },

  {
    id: 'share-button7',
    title: 'What is SafeChoice?',
    url: 'https://safechoiceusa.com/articles/What is SafeChoice.html'
  },
  {
    id: 'share-button8',
    title: 'Providing Convenient Access to Condoms for College Students',
    url: 'https://safechoiceusa.com/articles/SafeChoice Vending Machines: Providing Convenient Access to Condoms for College Students.html'
  },
  {
    id: 'share-button9',
    title: 'How Does SafeChoice Support Feminism?',
    url: 'https://safechoiceusa.com/articles/How Does SafeChoice Support Feminism.html'
  },
  {
    id: 'share-button10',
    title: 'Benefits of Condoms: Protecting Your Health and More',
    url: 'https://safechoiceusa.com/articles/The Surprising Benefits of Condoms: Protecting Your Health and More.html'
  },
  {
    id: 'share-button11',
    title: '24/7 Convenience Provided only by SafeChoice',
    url: 'https://safechoiceusa.com/articles/24_7 Convenience Provided only by SafeChoice.html'
  },
  {
    id: 'share-button13',
    title: 'U.S. STD Cases Rise To Record High',
    url: 'https://safechoiceusa.com/articles/U.S. STD Cases Rise To Record High.html'
  },
  {
    id: 'share-button14',
    title: 'STDs reach all-time high for 6th consecutive year',
    url: 'https://safechoiceusa.com/articles/STDs reach all-time high for 6th consecutive year.html'
  },




  {
    id: 'share-button15',
    title: "CDC study showing prevalence for STD's",
    url: "https://safechoiceusa.com/articles/CDC study showing prevalence for STD's.html"
  },




  {
    id: 'share-button16',
    title: 'Unintended Pregnancy Age Demographic',
    url: 'https://safechoiceusa.com/articles/Unintended Pregnancy Age Demographic.html'
  },
  {
    id: 'share-button17',
    title: 'STD Rates among LGBTQ+ Community',
    url: 'https://safechoiceusa.com/articles/STD Rates among LGBTQ+ Community.html'
  },
  {
    id: 'share-button18',
    title: 'STD Surveillance Data',
    url: 'https://safechoiceusa.com/articles/STD Surveillance Data.html'
  },

  {
    id: 'share-button19',
    title: 'Effect of condom availability programs.html',
    url: 'https://safechoiceusa.com/articles/Effect of condom availability programs.html'
  },
  {
    id: 'share-button20',
    title: 'Plan B Effectivity',
    url: 'https://safechoiceusa.com/articles/Plan B Effectivity.html'
  },
  {
    id: 'share-button21',
    title: 'Demand for emergency contraceptives increase after Roe vs Wade',
    url: 'https://safechoiceusa.com/articles/Demand for emergency contraceptives increase after Roe vs Wade.html'
  },
  {
    id: 'share-button22',
    title: 'Benefits of Over-The-Counter Medications',
    url: 'https://safechoiceusa.com/articles/Benefits of Over-The-Counter Medications.html'
  },
  {
    id: 'share-button23',
    title: 'Rate of Newly Transmitted Sexual Diseases',
    url: 'https://safechoiceusa.com/articles/Rate of Newly Transmitted Sexual Diseases.html'
  },
  {
    id: 'share-button24',
    title: 'Rate of Genital Herpe Infections',
    url: 'https://safechoiceusa.com/articles/Rate of Genital Herpe Infections.html'
  },
  {
    id: 'share-button25',
    title: 'Nearly Half of All New STD Infections Occur Among Nation’s Youth',
    url: 'https://safechoiceusa.com/articles/Nearly Half of All New STD Infections Occur Among Nation’s Youth.html'
  },
  {
    id: 'share-button26',
    title: 'Period pains: Can anti-inflammatory drugs help?',
    url: 'https://safechoiceusa.com/articles/Period pains: Can anti-inflammatory drugs help.html'
  },
  {
    id: 'share-button27',
    title: 'Oral contraceptive pill for primary dysmenorrhoea - PMC',
    url: 'https://safechoiceusa.com/articles/Oral contraceptive pill for primary dysmenorrhoea - PMC.html'
  },
  ,
  {
    id: 'share-button28',
    title: 'A Novel Approach to Enhancing Sexual Health in College Dormitories',
    url: 'https://safechoiceusa.com/articles/A Novel Approach to Enhancing Sexual Health in College Dormitories.html'
  },


];

if (navigator.share) {
  shareButtons.forEach(button => {
    const shareButton = document.getElementById(button.id);
    shareButton.addEventListener('click', () => {
      navigator.share({
        title: button.title,
        url: button.url
      })
        .then(() => console.log('Successfully shared article'))
        .catch(error => console.log('Error sharing article:', error));
    });
  });
} else {
  shareButtons.forEach(button => {
    const shareButton = document.getElementById(button.id);
    shareButton.addEventListener('click', () => {
      const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(button.url)}&text=${encodeURIComponent(button.title)}`;
      window.open(shareUrl, '_blank');
    });
  });
}
