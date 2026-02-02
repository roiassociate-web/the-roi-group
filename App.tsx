
import React, { useState } from 'react';
import { 
  ChevronRight, 
  BookOpen, 
  Calendar, 
  Users, 
  CheckCircle, 
  Mail, 
  Instagram, 
  Monitor,
  MapPin,
  CreditCard,
  LayoutDashboard,
  Globe,
  AlertCircle,
  Clock,
  Zap,
  Star,
  RefreshCcw,
  Link as LinkIcon
} from 'lucide-react';
import { INITIAL_CONTENT, INITIAL_CURRICULUM, REFERENCES } from './constants';
import { SiteContent, Applicant, CurriculumItem } from './types';
import { GlassCard } from './components/GlassCard';
import { AdminDashboard } from './components/AdminDashboard';

const APPLY_URL = 'https://m.site.naver.com/1Zrz1';
const INSTAGRAM_URL = 'https://www.instagram.com/theroigroup.official/';
const WEBSITE_URL = 'https://www.the-roi.co.kr/';

const App: React.FC = () => {
  const [content, setContent] = useState<SiteContent>(INITIAL_CONTENT);
  const [curriculum, setCurriculum] = useState<CurriculumItem[]>(INITIAL_CURRICULUM);
  const [applicants, setApplicants] = useState<Applicant[]>([
    { id: '1', name: '홍길동', email: 'hong@test.com', phone: '010-1234-5678', type: 'online', date: '2024-02-01', status: 'confirmed' },
    { id: '2', name: '이순신', email: 'lee@test.com', phone: '010-5678-1234', type: 'offline', date: '2024-02-02', status: 'pending' },
  ]);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // 정밀 스크롤 함수
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleApplyClick = () => {
    window.open(APPLY_URL, '_blank');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#000a12] text-white selection:bg-cyan-500/30">
      {/* Admin Toggle */}
      <button 
        onClick={() => setIsAdminOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full shadow-xl hover:bg-white/20 transition group print:hidden"
      >
        <LayoutDashboard className="text-white group-hover:scale-110 transition" />
      </button>

      {isAdminOpen && (
        <AdminDashboard 
          content={content}
          setContent={setContent}
          curriculum={curriculum}
          setCurriculum={setCurriculum}
          applicants={applicants}
          setApplicants={setApplicants}
          onClose={() => setIsAdminOpen(false)}
        />
      )}

      {/* Background Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-4 flex justify-between items-center glass border-b border-white/5 print:hidden">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded flex items-center justify-center font-bold italic text-white">ROI</div>
          <span className="font-extrabold text-xl tracking-tighter uppercase text-white">THE ROI GROUP</span>
        </div>
        <div className="hidden md:flex gap-10 text-sm font-medium text-gray-300">
          <a href="#instructor" onClick={(e) => scrollToSection(e, 'instructor')} className="hover:text-white transition">강사소개</a>
          <a href="#reference" onClick={(e) => scrollToSection(e, 'reference')} className="hover:text-white transition">레퍼런스</a>
          <a href="#curriculum" onClick={(e) => scrollToSection(e, 'curriculum')} className="hover:text-white transition">커리큘럼</a>
          <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className="hover:text-white transition">일정/비용</a>
        </div>
        <button 
          onClick={handleApplyClick}
          className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-200 transition active:scale-95"
        >
          신청하기
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden text-center">
        <div className="max-w-6xl mx-auto">
          <p className="inline-block px-8 py-4 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-bold text-xl md:text-3xl mb-12 tracking-wide leading-relaxed animate-pulse">
            {content.hero.copy}
          </p>
          <h1 className="text-5xl md:text-8xl font-black leading-[1.4] md:leading-[1.5] mb-12 tracking-tight">
            제안서 특강<br/>
            수주 여부는 <span className="double-underline-blue">10초</span> 안에<br/>
            결정됩니다.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            {content.hero.subTitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center print:hidden">
            <button 
              onClick={handleApplyClick}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition shadow-2xl shadow-cyan-500/20 flex items-center justify-center gap-2"
            >
              얼리버드 혜택으로 신청하기 <ChevronRight size={20}/>
            </button>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section id="instructor" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-3xl blur-2xl opacity-20 transform -rotate-3" />
              <img 
                src="https://lh3.googleusercontent.com/d/14NzrjQNBkpihPsrsCcIipErMOJi91BmV" 
                alt={content.instructor.name} 
                className="relative z-10 w-full aspect-[3/4] object-cover rounded-3xl shadow-2xl hover:scale-[1.01] transition duration-500 border border-white/10"
              />
            </div>
            <div>
              <h4 className="text-cyan-400 font-bold mb-2 tracking-widest uppercase">Instructor</h4>
              <h2 className="text-6xl font-black mb-4">{content.instructor.name}</h2>
              <p className="text-2xl text-purple-400 font-bold mb-8">{content.instructor.role}</p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold flex items-center gap-2 mb-4 border-l-4 border-cyan-400 pl-4">Career</h3>
                  <ul className="space-y-3 text-gray-400">
                    {content.instructor.bio.map((line, i) => {
                      if (line === "") return <li key={i} className="h-4" />;
                      return (
                        <li key={i} className="flex items-start gap-2 group">
                          <CheckCircle size={18} className="text-cyan-400 shrink-0 mt-1 opacity-60 group-hover:opacity-100 transition" />
                          <span className="text-gray-300 leading-relaxed whitespace-pre-wrap">{line}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section id="reference" className="py-32 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">현장이 증명하는 압도적 성과</h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">국내 유수의 대기업 및 공공기관이 선택한 검증된 수주 전략</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 px-4 py-16 rounded-3xl">
            <div className="flex flex-col items-center">
              <span className="text-6xl md:text-7xl font-black text-[#4FD1ED] mb-4 tracking-tighter drop-shadow-[0_0_15px_rgba(79,209,237,0.3)]">
                {content.stats.companies}+
              </span>
              <span className="text-gray-400 font-bold text-sm md:text-base">대기업/공공기관 파트너</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-6xl md:text-7xl font-black text-[#B085F5] mb-4 tracking-tighter drop-shadow-[0_0_15px_rgba(176,133,245,0.3)]">
                {content.stats.projects}+
              </span>
              <span className="text-gray-400 font-bold text-sm md:text-base">B2B 프로젝트 기획</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-6xl md:text-7xl font-black text-[#5CACE2] mb-4 tracking-tighter drop-shadow-[0_0_15px_rgba(92,172,226,0.3)]">
                95%
              </span>
              <span className="text-gray-400 font-bold text-sm md:text-base">제안서 채택률 상위</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-6xl md:text-7xl font-black text-[#7E8CE0] mb-4 tracking-tighter drop-shadow-[0_0_15px_rgba(126,140,224,0.3)]">
                10억+
              </span>
              <span className="text-gray-400 font-bold text-sm md:text-base">최대 수주 프로젝트</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-12 items-center opacity-40 hover:opacity-80 transition duration-700">
            {REFERENCES.map((ref, i) => (
              <div key={i} className="flex items-center justify-center text-center group">
                <span className="text-gray-500 font-extrabold text-[12px] md:text-[14px] tracking-tighter leading-tight group-hover:text-white transition duration-300">
                  {ref}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-balance tracking-tight">단 3시간, 수주 본능을 일깨우는 실전 몰입</h2>
            <p className="text-xl text-gray-400">이론보다 실습, 뜬구름보다 실체. 당장 내일의 제안서가 달라집니다.</p>
          </div>
          <div className="space-y-8 relative max-w-4xl mx-auto mb-16">
            {curriculum.map((item, idx) => (
              <GlassCard key={item.id} className="relative overflow-hidden">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-cyan-400 font-black text-xl">STEP {idx + 1}</span>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-gray-300 whitespace-pre-line leading-relaxed">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Program Perks & Aftercare Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight uppercase">Program Perks</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <GlassCard className="border-cyan-500/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-cyan-400">
                <MapPin size={24}/> 오프라인 강의 시
              </h3>
              <ul className="space-y-4">
                {content.benefits.offline.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg text-gray-300">
                    <Zap size={20} className="text-cyan-400 shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
            <GlassCard className="border-purple-500/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-purple-400">
                <Monitor size={24}/> 온라인 강의 시
              </h3>
              <ul className="space-y-4">
                {content.benefits.online.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg text-gray-300">
                    <Zap size={20} className="text-purple-400 shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          <GlassCard className="bg-gradient-to-br from-white/10 to-transparent border-white/10 mb-16">
            <h3 className="text-3xl font-black mb-8 flex items-center gap-3 text-white">
              <Star size={32} className="text-yellow-400 fill-yellow-400 animate-pulse" /> 사후 관리
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.benefits.aftercare.map((item, i) => (
                <div key={i} className="flex flex-col gap-4 p-4 rounded-xl hover:bg-white/5 transition border-l border-white/10">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-black text-cyan-400">{i + 1}</div>
                  <p className="text-gray-300 leading-relaxed font-medium">{item}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Pricing & Schedule */}
      <section id="pricing" className="py-32 px-6 pb-48">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">교육 일정 및 신청 안내</h2>
            <p className="text-xl text-gray-400">인원 제한이 있으니 서둘러 신청해 주세요.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <GlassCard className="border-cyan-500/50 relative overflow-hidden group">
              <Monitor size={48} className="text-cyan-400 mb-6"/>
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">온라인 특강 (ZOOM)</h3>
              <div className="space-y-3 mb-10 text-lg text-gray-300">
                <div className="flex items-center gap-3"><Calendar size={20} className="text-cyan-400"/> {content.pricing.online.date}</div>
                <div className="flex items-center gap-3"><Clock size={20} className="text-cyan-400"/> {content.pricing.online.time}</div>
                <div className="flex items-center gap-3"><Users size={20} className="text-cyan-400"/> 최대 10명 마감</div>
              </div>
              <div className="text-4xl font-black mb-6">{content.pricing.online.price}</div>
              <button onClick={handleApplyClick} className="w-full bg-cyan-500 text-black font-bold py-4 rounded-xl hover:scale-[1.02] transition">신청하기</button>
            </GlassCard>

            <GlassCard className="border-purple-500/50 relative overflow-hidden group">
              <MapPin size={48} className="text-purple-400 mb-6"/>
              <h3 className="text-3xl font-bold mb-4 text-purple-400">오프라인 워크샵 (강남)</h3>
              <div className="space-y-3 mb-10 text-lg text-gray-300">
                <div className="flex items-center gap-3"><Calendar size={20} className="text-purple-400"/> {content.pricing.offline.date}</div>
                <div className="flex items-center gap-3"><Clock size={20} className="text-purple-400"/> {content.pricing.offline.time}</div>
                <div className="flex items-center gap-3"><MapPin size={20} className="text-purple-400"/> {content.pricing.offline.location}</div>
              </div>
              <div className="text-4xl font-black mb-6">{content.pricing.offline.price}</div>
              <button onClick={handleApplyClick} className="w-full bg-purple-600 text-white font-bold py-4 rounded-xl hover:scale-[1.02] transition">신청하기</button>
            </GlassCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <GlassCard className="bg-white/5 border border-white/10">
                <h4 className="text-2xl font-black mb-8 flex items-center gap-2 text-white">
                  <RefreshCcw size={24} className="text-cyan-400" /> 환불 및 취소 규정 안내
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-bold text-cyan-400 mb-4">{content.refundPolicy.online.title}</h5>
                    <ul className="space-y-2 text-sm text-gray-400">
                      {content.refundPolicy.online.lines.map((line, i) => (
                        <li key={i} className="flex items-center gap-2">
                           <div className="w-1 h-1 bg-cyan-400 rounded-full" /> {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-purple-400 mb-2">{content.refundPolicy.offline.title}</h5>
                    <p className="text-[10px] text-gray-500 mb-4 leading-relaxed">{content.refundPolicy.offline.notice}</p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      {content.refundPolicy.offline.lines.map((line, i) => (
                        <li key={i} className="flex items-center gap-2">
                           <div className="w-1 h-1 bg-purple-400 rounded-full" /> {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </div>
            <GlassCard className="bg-gradient-to-br from-cyan-500/10 to-transparent flex flex-col items-center justify-center text-center">
              <CreditCard size={48} className="text-cyan-400 mb-6" />
              <h4 className="text-2xl font-black mb-4 tracking-tighter uppercase">Payment Info</h4>
              <p className="text-lg text-gray-300 font-bold whitespace-pre-line leading-relaxed">
                {content.pricing.bankInfo}
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 md:px-16 border-t border-white/5 bg-black/50 print:hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          {/* Left Side: Brand and Copyright */}
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-2">THE ROI GROUP</h2>
            <p className="text-sm md:text-base text-gray-400 font-medium">
              © 2025 (주)THE ROI GROUP All Rights Reserved.
            </p>
          </div>

          {/* Right Side: Contact Details */}
          <div className="flex flex-col items-start md:items-end gap-4 text-left md:text-right">
            {/* Main Contact Links */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center">
                <a 
                href="mailto:together@the-roi.co.kr" 
                className="flex items-center gap-2 text-lg md:text-xl font-bold text-white hover:text-cyan-400 transition-colors"
                >
                <Mail size={20} className="text-cyan-400" /> together@the-roi.co.kr
                </a>
                <a 
                href={WEBSITE_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm md:text-base font-bold text-gray-300 hover:text-cyan-400 transition-colors"
                >
                <Globe size={18} className="text-cyan-400" /> Homepage
                </a>
                <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm md:text-base font-bold text-gray-300 hover:text-cyan-400 transition-colors"
                >
                <Instagram size={18} className="text-pink-500" /> Instagram
                </a>
            </div>

            {/* Address and Business Info */}
            <div className="text-sm md:text-base text-gray-400 leading-relaxed max-w-xl">
              <p>서울특별시 서초구 서초대로 398 그레이츠 강남 6층 (주)더로이그룹</p>
              <p className="text-[12px] text-gray-600 mt-1">사업자등록번호: 467-86-02807</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
