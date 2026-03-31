import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import './About.css';

const About = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    ar: {
      title: 'من نحن',
      subtitle: 'نحو مستقبل أكثر أماناً لسيارتك',
      story: {
        title: 'قصتنا',
        content: 'في عام 2020 نشأة فكرة مراكز تقديم خدمات تركيب وصيانة زجاج السيارات ومنها بدأنا في رحلة الدراسة والبحث في مجال زجاج السيارات وفي أوائل عام 2021 قمنا بمقابلة عدد من الخبراء في هذا المجال وزرنا عدد من المصانع والموردين كما قمنا بقراءة العديد من الدراسات والتقارير حول تطورات هذا المجال في السوق المحلي والعالمي، وفي منتصف عام 2021 بدأنا على تطوير خطة شاملة وبدأت رحلة اختيار الاسم التجاري وكنا حريصون على ان يكون اسماً عربياً، ثم جاءت فكرة (وتم) وكان هذا اسم يجمع بين البساطة والوضوح ويعكس هوية الشركة ويلائم رؤيتنا، فـ (وتم) ماضٍ لفعل تم ليكون أيضاً نداء العلامة هو (وتم بكل دقة) فكان افتتاح أول مراكزنا في تاريخ 1/1/2022.'
      },
      mission: {
        title: 'رسالتنا',
        content: 'تقديم أفضل خدمات زجاج السيارات بجودة عالية وأسعار تنافسية، مع ضمان رضا العملاء وسلامتهم.'
      },
      vision: {
        title: 'رؤيتنا',
        content: 'أن نكون الخيار الأول لخدمات زجاج السيارات في المملكة والمنطقة، من خلال الابتكار المستمر وتطوير الخدمات.'
      },
      values: {
        title: 'قيمنا',
        list: [
          'الجودة: نستخدم أفضل المواد والتقنيات',
          'النزاهة: نتعامل بصدق وشفافية مع عملائنا',
          'الابتكار: نواكب أحدث التطورات في المجال',
          'الاحترافية: فريق عمل مدرب ومؤهل'
        ]
      },
      stats: {
        years: 'سنوات خبرة',
        branches: 'فرع',
        clients: 'عميل',
        technicians: 'فني'
      }
    },
    en: {
      title: 'About Us',
      subtitle: 'A Saudi based company specialized in automotive glass installation and maintenance services.',
      story: {
        title: 'Our Story',
        content: 'In 2020, the idea of establishing service centers for installation and maintenance of automotive glass was born. That marked the beginning of our journey of research and study in the field of automotive glass. In early 2021, we met with several experts in this field and visited a number of factories and suppliers. We also reviewed numerous studies and reports on the developments in this industry both locally and globally. By mid-2021, we began developing a comprehensive plan and started the journey of choosing brand name. We were keen to choose an Arabic name, which led us to the idea of "Watam" a name that combines simplicity and clarity, reflects the companys identity and aligns with our vision. "Watam" comes from the past tense verb "Tam" meaning "completed" and also serves as a precise and impactful brand call: Watam with precision.'
      },
      mission: {
        title: 'Our Mission',
        content: 'To be one of the top providers of automotive glass installation and maintenance services.'
      },
      vision: {
        title: 'Our Goal',
        content: 'To build customer trust and expand our services across all regions of our country. We aim to establish long-term relationships with our customers through commitment, quality, and staying up to date with technological advancements in the automotive glass field '
      },
      values: {
        title: 'Our Values',
        list: [
          'Quality: We use the best materials and techniques',
          'Integrity: We deal honestly and transparently with our customers',
          'Innovation: We keep up with the latest developments in the field',
          'Professionalism: Trained and qualified team'
        ]
      },
      stats: {
        years: 'Years Experience',
        branches: 'Branches',
        clients: 'Clients',
        technicians: 'Technicians'
      }
    }
  };

  const t = content[language];

  return (
    <div className="about-page">
      <section className="section about-hero">
        <div className="container">
          <h1 className="section-title">{t.title}</h1>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>
      </section>

      <section className="section story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>{t.story.title}</h2>
              <p>{t.story.content}</p>
            </div>
            <div className="story-image">
              <img src="../src/assets/images/about.jpg" alt="Our Story" />
            </div>
          </div>
        </div>
      </section>

      <section className="section mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card mission">
              <i className="fas fa-bullseye"></i>
              <h3>{t.mission.title}</h3>
              <p>{t.mission.content}</p>
            </div>
            <div className="mv-card vision">
              <i className="fas fa-eye"></i>
              <h3>{t.vision.title}</h3>
              <p>{t.vision.content}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <h2 className="section-title centered">{t.values.title}</h2>
          <div className="values-grid">
            {t.values.list.map((value, index) => (
              <div key={index} className="value-item">
                <div className="value-icon">
                  <i className={`fas fa-${index === 0 ? 'star' : index === 1 ? 'handshake' : index === 2 ? 'lightbulb' : 'users'}`}></i>
                </div>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">{t.stats.years}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10</span>
              <span className="stat-label">{t.stats.branches}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10k+</span>
              <span className="stat-label">{t.stats.clients}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">{t.stats.technicians}</span>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;