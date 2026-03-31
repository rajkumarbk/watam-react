import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import './Branches.css';

const Branches = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    ar: {
      title: 'فروعنا',
      subtitle: 'نخدمكم في ١٠ فروع منتشرة في جميع أنحاء المملكة',
      branch: 'فرع',
      call: 'اتصال',
      direction: 'الاتجاهات',
      hours: 'ساعات العمل:',
      satThu: 'السبت - الخميس',
      fri: 'الجمعة',
      phone: 'رقم الهاتف:',
      openingSoon: 'قريباً',
      closed: 'مغلق'
    },
    en: {
      title: 'Our Branches',
      subtitle: 'Serving you through 10 branches across the kingdom',
      branch: 'Branch',
      call: 'Call',
      direction: 'Direction',
      hours: 'Working Hours:',
      satThu: 'Saturday - Thursday',
      fri: 'Friday',
      phone: 'Phone:',
      openingSoon: 'Opening Soon!',
      closed: 'Closed'
    }
  };

  const t = content[language];

  const branches = [
    {
      id: 'W01',
      name: 'Watam Auto Glass W01',
      phone: ['0144231907'],
      location: {
        ar: 'تبوك، عمر بن الخطاب Rd',
        en: 'Tabuk, Omer bin Alkattab Rd'
      },
      mapLink: 'https://www.google.com/maps/search/?api=1&query=28.3838,36.5550',
      openingHours: {
        satThu: '8:00 AM - 1:00 PM | 4:00 PM - 10:00 PM',
        fri: '3:00 PM - 9:00 PM'
      },
      status: 'open'
    },
    {
      id: 'W02',
      name: 'Watam Auto Glass W02',
      status: 'coming-soon'
    },
    {
      id: 'W03',
      name: 'Watam Auto Glass W03',
      phone: ['0539931180'],
      location: {
        ar: 'الرياض، المدينة المنورة Rd',
        en: 'Riyadh, Almadina Almunaarh Rd'
      },
      mapLink: 'https://www.google.com/maps/search/?api=1&query=24.7136,46.6753',
      openingHours: {
        satThu: '8:00 AM - 12:00 PM | 2:00 PM - 9:00 PM',
        fri: '3:00 PM - 9:00 PM'
      },
      status: 'open'
    },
    {
      id: 'W04',
      name: 'Watam Auto Glass W04',
      phone: ['0539220075'],
      location: {
        ar: 'الرياض، المصانع، الحاير Rd',
        en: 'Riyadh, Almasaanaa, Al haeer Rd'
      },
      mapLink: 'https://www.google.com/maps/search/?api=1&query=24.6236,46.7153',
      openingHours: {
        satThu: '8:00 AM - 9:00 PM',
        fri: '2:00 PM - 9:00 PM'
      },
      status: 'open'
    },
    {
      id: 'W05',
      name: 'Watam Auto Glass W05',
      status: 'coming-soon'
    },
    {
      id: 'W06',
      name: 'Watam Auto Glass W06',
      phone: ['0538990773'],
      location: {
        ar: 'الرياض، الأمير بندر بن عبدالعزيز Rd',
        en: 'Riyadh, Prince Bander bin Abdulaziz Rd'
      },
      mapLink: 'https://www.google.com/maps/search/?api=1&query=24.7743,46.6953',
      openingHours: {
        satThu: '8:00 AM - 9:00 PM',
        fri: '2:00 PM - 9:00 PM'
      },
      status: 'open'
    },
    {
      id: 'W07',
      name: 'Watam Auto Glass W07',
      phone: ['0537788320'],
      location: {
        ar: 'خميس مشيط، الرصراص Rd',
        en: 'Khamis Mushait, Alrasras Rd'
      },
      mapLink: 'https://www.google.com/maps/search/?api=1&query=18.3000,42.7333',
      openingHours: {
        satThu: '8:00 AM - 12:00 PM | 3:00 PM - 10:00 PM',
        fri: '2:00 PM - 9:00 PM'
      },
      status: 'open'
    },
    {
      id: 'W08',
      name: 'Watam Auto Glass W08',
      phone: ['0539444679'],
      location: {
        ar: 'صبياء، الملك فهد Rd',
        en: 'Sabya, King Fahad Rd'
      },
      mapLink: 'https://www.google.com/maps/search/?api=1&query=17.1500,42.6167',
      openingHours: {
        satThu: '8:00 AM - 12:00 PM | 3:00 PM - 10:00 PM',
        fri: '2:00 PM - 9:00 PM'
      },
      status: 'open'
    },
    {
      id: 'W09',
      name: 'Watam Auto Glass W09',
      phone: ['0556443371'],
      location: {
        ar: 'أبو عريش، النهضة، الأمير سلطان Rd',
        en: 'Abo Arish, Alnahdhh, Prince Sultan Rd'
      },
      mapLink: 'https://www.google.com/maps/search/?api=1&query=16.9667,42.8333',
      openingHours: {
        satThu: '8:00 AM - 12:00 PM | 3:00 PM - 10:00 PM',
        fri: '2:00 PM - 9:00 PM'
      },
      status: 'open'
    },
    {
      id: 'W10',
      name: 'Watam Auto Glass W10',
      phone: ['0534488769'],
      location: {
        ar: 'جازان، الملك عبدالعزيز Rd',
        en: 'Jazan, King Abdullaziz Rd'
      },
      mapLink: 'https://www.google.com/maps/search/?api=1&query=16.8892,42.5611',
      openingHours: {
        satThu: '8:00 AM - 12:00 PM | 3:00 PM - 10:00 PM',
        fri: '2:00 PM - 9:00 PM'
      },
      status: 'open'
    }
  ];

  const renderPhoneNumbers = (phones) => {
    if (!phones || phones.length === 0) return null;
    return phones.map((phone, index) => (
      <p key={index}>{phone}</p>
    ));
  };

  const renderOpeningHours = (hours) => {
    if (!hours) return null;
    return (
      <div className="hours-details">
        <p><span className="day-label">{t.satThu}:</span> {hours.satThu}</p>
        {hours.fri && <p><span className="day-label">{t.fri}:</span> {hours.fri}</p>}
      </div>
    );
  };

  return (
    <div className="branches-page">
      <section className="section branches-hero">
        <div className="container">
          <h1 className="section-title">{t.title}</h1>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>
      </section>

      <section className="section branches-grid-section">
        <div className="container">
          <div className="branches-grid">
            {branches.map(branch => (
              <div key={branch.id} className={`branch-card ${branch.status}`}>
                {branch.status === 'coming-soon' ? (
                  <>
                    <div className="branch-header">
                      {/* <div className="branch-id">{branch.id}</div> */}
                      <h3 className="branch-name">{branch.name}</h3>
                    </div>
                    <div className="coming-soon-message">
                      <i className="fas fa-clock"></i>
                      <h2>{t.openingSoon}</h2>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="branch-header">
                      {/* <div className="branch-id">{branch.id}</div> */}
                      <h3 className="branch-name">{branch.name}</h3>
                    </div>

                    <div className="branch-content">
                      <div className="branch-info">
                        <div className="info-item">
                          <i className="fas fa-map-marker-alt"></i>
                          <p>{branch.location[language]}</p>
                        </div>

                        <div className="info-item">
                          <i className="fas fa-phone"></i>
                          <div className="phone-numbers">
                            {renderPhoneNumbers(branch.phone)}
                          </div>
                        </div>

                        <div className="info-item hours">
                          <i className="fas fa-clock"></i>
                          {renderOpeningHours(branch.openingHours)}
                        </div>
                      </div>

                      <div className="branch-actions">
                        {branch.phone?.length > 0 && (
                          <a href={`tel:${branch.phone[0]}`} className="action-btn call-btn">
                            <i className="fas fa-phone-alt"></i>
                            {t.call}
                          </a>
                        )}
                        {branch.mapLink && (
                          <a
                            href={branch.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="action-btn direction-btn"
                          >
                            <i className="fas fa-directions"></i>
                            {t.direction}
                          </a>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Branches;