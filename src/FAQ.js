const FAQ = () => {
    const faqData = [
      {
        question: 'What is the purpose of the student mentorship program?',
        answer: 'The student mentorship program aims to connect experienced mentors with students to provide guidance and support in their academic and personal growth.'
      },
      {
        question: 'How can I become a mentor?',
        answer: 'To become a mentor, you can sign up on our platform and create a mentor profile. Our team will review your application and match you with suitable mentees.'
      },
      {
        question: 'How do I find a mentor?',
        answer: 'Students can browse through the list of available mentors on our platform and send mentorship requests to those they are interested in connecting with.'
      },
      {
        question: 'What is the eligibility criteria to become a mentor?',
        answer: 'To become a mentor, you should be a current student or a recent graduate with a strong academic record and a willingness to help others.'
      },
      {
        question: 'How long does the mentorship program last?',
        answer: 'The duration of the mentorship program varies depending on the needs of the mentee and the availability of the mentor, but typically lasts for a semester or academic year.'
      },
      {
        question: 'Can I have more than one mentor at a time?',
        answer: 'While it is possible to have multiple mentors, we recommend focusing on building a strong relationship with one mentor to maximize the benefits of the mentorship program.'
      },
      {
        question: 'How often should I meet with my mentor?',
        answer: 'The frequency of meetings with your mentor can be mutually agreed upon based on your schedules and needs. We recommend meeting at least once a month to maintain regular communication.'
      },
      {
        question: 'What type of support can I expect from my mentor?',
        answer: 'Mentors can provide academic guidance, career advice, personal development tips, networking opportunities, and emotional support to help you succeed in your academic and personal life.'
      },
      {
        question: 'How are mentors matched with mentees?',
        answer: 'Mentors and mentees are matched based on their interests, goals, academic backgrounds, and availability. Our team carefully reviews applications to ensure successful mentor-mentee matches.'
      },
      {
      question: 'Can I switch mentors if the relationship is not working out?',
      answer:' If you feel that the relationship with your mentor is not productive, you can request a mentor change by contacting our support team. We will work to find a better match for you.'
      },
      {
        question: 'How can I provide feedback about my mentorship experience?',
        answer: 'We value your feedback and encourage you to share your thoughts and suggestions about your mentorship experience. You can provide feedback through our platform or contact our support team directly.'
      }
    ];
  
    return (
      <div className="faq-container">
        <h1 className="faq-heading">Frequently Asked Questions</h1>
        <div className="faq-list">
          {faqData.map((faqItem, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question">{faqItem.question}</div>
              <div className="faq-answer">{faqItem.answer}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FAQ;