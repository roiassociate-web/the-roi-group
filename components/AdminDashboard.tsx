
import React, { useState } from 'react';
import { 
  Users, 
  Settings, 
  FileText, 
  Layout, 
  CheckCircle, 
  XCircle, 
  Download,
  Plus,
  Trash2,
  Save,
  CreditCard
} from 'lucide-react';
import { SiteContent, Applicant, CurriculumItem } from '../types';

interface AdminDashboardProps {
  content: SiteContent;
  setContent: (content: SiteContent) => void;
  curriculum: CurriculumItem[];
  setCurriculum: (curriculum: CurriculumItem[]) => void;
  applicants: Applicant[];
  setApplicants: (applicants: Applicant[]) => void;
  onClose: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  content, 
  setContent, 
  curriculum, 
  setCurriculum,
  applicants,
  setApplicants,
  onClose 
}) => {
  const [activeTab, setActiveTab] = useState<'applicants' | 'content' | 'curriculum'>('applicants');

  const handleUpdateStatus = (id: string, status: Applicant['status']) => {
    setApplicants(applicants.map(a => a.id === id ? { ...a, status } : a));
  };

  const handleDeleteApplicant = (id: string) => {
    if (confirm('신청자를 삭제하시겠습니까?')) {
      setApplicants(applicants.filter(a => a.id !== id));
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#000a12] flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 border-r border-white/10 bg-white/5 p-6 flex flex-col gap-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white italic">
            ROI
          </div>
          <span className="font-bold text-lg tracking-tight">The ROI Admin</span>
        </div>

        <nav className="flex flex-col gap-2">
          <button 
            onClick={() => setActiveTab('applicants')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeTab === 'applicants' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <Users size={20} /> 신청자 관리
          </button>
          <button 
            onClick={() => setActiveTab('content')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeTab === 'content' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <Settings size={20} /> 사이트 설정
          </button>
          <button 
            onClick={() => setActiveTab('curriculum')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeTab === 'curriculum' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <FileText size={20} /> 커리큘럼 편집
          </button>
        </nav>

        <div className="mt-auto">
          <button 
            onClick={onClose}
            className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition shadow-lg"
          >
            랜딩페이지로 돌아가기
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-10">
        <header className="mb-10 flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            {activeTab === 'applicants' && '수강 신청자 명단'}
            {activeTab === 'content' && '랜딩페이지 텍스트 편집'}
            {activeTab === 'curriculum' && '커리큘럼 상세 관리'}
          </h1>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition">
              <Download size={18} /> CSV 내보내기
            </button>
          </div>
        </header>

        {activeTab === 'applicants' && (
          <div className="glass rounded-2xl overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 font-semibold text-gray-400">성함</th>
                  <th className="px-6 py-4 font-semibold text-gray-400">이메일</th>
                  <th className="px-6 py-4 font-semibold text-gray-400">연락처</th>
                  <th className="px-6 py-4 font-semibold text-gray-400">구분</th>
                  <th className="px-6 py-4 font-semibold text-gray-400">상태</th>
                  <th className="px-6 py-4 font-semibold text-gray-400">관리</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {applicants.map(app => (
                  <tr key={app.id} className="hover:bg-white/5 transition">
                    <td className="px-6 py-4 font-medium">{app.name}</td>
                    <td className="px-6 py-4 text-gray-400">{app.email}</td>
                    <td className="px-6 py-4 text-gray-400">{app.phone}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-md text-xs font-bold ${app.type === 'online' ? 'bg-blue-500/20 text-blue-400' : 'bg-orange-500/20 text-orange-400'}`}>
                        {app.type === 'online' ? '온라인' : '오프라인'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`flex items-center gap-1 text-sm font-semibold ${app.status === 'confirmed' ? 'text-green-400' : app.status === 'cancelled' ? 'text-red-400' : 'text-yellow-400'}`}>
                        {app.status === 'confirmed' ? '입금완료' : app.status === 'cancelled' ? '취소' : '대기중'}
                      </span>
                    </td>
                    <td className="px-6 py-4 flex gap-2">
                      <button onClick={() => handleUpdateStatus(app.id, 'confirmed')} className="p-1 hover:text-green-400 transition" title="승인"><CheckCircle size={18}/></button>
                      <button onClick={() => handleUpdateStatus(app.id, 'cancelled')} className="p-1 hover:text-red-400 transition" title="취소"><XCircle size={18}/></button>
                      <button onClick={() => handleDeleteApplicant(app.id)} className="p-1 hover:text-gray-400 transition" title="삭제"><Trash2 size={18}/></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'content' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-32">
            <section className="glass p-6 rounded-2xl flex flex-col gap-4 border border-white/5">
              <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-cyan-400"><Layout size={20}/> 히어로 섹션</h2>
              <div>
                <label className="text-xs text-gray-400 block mb-1">메인 카피 (질문형)</label>
                <input 
                  type="text" 
                  value={content.hero.copy}
                  onChange={(e) => setContent({...content, hero: {...content.hero, copy: e.target.value}})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 block mb-1">메인 타이틀</label>
                <input 
                  type="text" 
                  value={content.hero.title}
                  onChange={(e) => setContent({...content, hero: {...content.hero, title: e.target.value}})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 block mb-1">서브 타이틀</label>
                <textarea 
                  value={content.hero.subTitle}
                  onChange={(e) => setContent({...content, hero: {...content.hero, subTitle: e.target.value}})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-cyan-500 outline-none h-20"
                />
              </div>
            </section>

            <section className="glass p-6 rounded-2xl flex flex-col gap-4 border border-white/5">
              <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-purple-400"><Users size={20}/> 강사 프로필</h2>
              <div>
                <label className="text-xs text-gray-400 block mb-1">이름</label>
                <input 
                  type="text" 
                  value={content.instructor.name}
                  onChange={(e) => setContent({...content, instructor: {...content.instructor, name: e.target.value}})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 block mb-1">직함</label>
                <input 
                  type="text" 
                  value={content.instructor.role}
                  onChange={(e) => setContent({...content, instructor: {...content.instructor, role: e.target.value}})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-cyan-500 outline-none"
                />
              </div>
            </section>

            <section className="glass p-6 rounded-2xl flex flex-col gap-4 border border-white/5 col-span-1 md:col-span-2">
              <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-green-400"><CreditCard size={20}/> 일정 및 가격 설정</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="font-bold text-cyan-400">온라인 교육</h3>
                  <div>
                    <label className="text-xs text-gray-400 block mb-1">날짜</label>
                    <input 
                      type="text" 
                      value={content.pricing.online.date}
                      onChange={(e) => setContent({...content, pricing: {...content.pricing, online: {...content.pricing.online, date: e.target.value}}})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-cyan-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 block mb-1">시간</label>
                    <input 
                      type="text" 
                      value={content.pricing.online.time}
                      onChange={(e) => setContent({...content, pricing: {...content.pricing, online: {...content.pricing.online, time: e.target.value}}})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-cyan-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 block mb-1">가격</label>
                    <input 
                      type="text" 
                      value={content.pricing.online.price}
                      onChange={(e) => setContent({...content, pricing: {...content.pricing, online: {...content.pricing.online, price: e.target.value}}})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-cyan-500 outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="font-bold text-purple-400">오프라인 교육</h3>
                  <div>
                    <label className="text-xs text-gray-400 block mb-1">날짜</label>
                    <input 
                      type="text" 
                      value={content.pricing.offline.date}
                      onChange={(e) => setContent({...content, pricing: {...content.pricing, offline: {...content.pricing.offline, date: e.target.value}}})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-purple-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 block mb-1">시간</label>
                    <input 
                      type="text" 
                      value={content.pricing.offline.time}
                      onChange={(e) => setContent({...content, pricing: {...content.pricing, offline: {...content.pricing.offline, time: e.target.value}}})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-purple-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 block mb-1">장소</label>
                    <input 
                      type="text" 
                      value={content.pricing.offline.location}
                      onChange={(e) => setContent({...content, pricing: {...content.pricing, offline: {...content.pricing.offline, location: e.target.value}}})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-purple-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 block mb-1">가격</label>
                    <input 
                      type="text" 
                      value={content.pricing.offline.price}
                      onChange={(e) => setContent({...content, pricing: {...content.pricing, offline: {...content.pricing.offline, price: e.target.value}}})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-purple-500 outline-none"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-400 block mb-1">입금 계좌 정보</label>
                <textarea 
                  value={content.pricing.bankInfo}
                  onChange={(e) => setContent({...content, pricing: {...content.pricing, bankInfo: e.target.value}})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-cyan-500 outline-none h-20"
                />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'curriculum' && (
          <div className="flex flex-col gap-4 max-w-4xl pb-32">
            {curriculum.map((item, idx) => (
              <div key={item.id} className="glass p-6 rounded-2xl border border-white/5 flex gap-6 items-start">
                <div className="bg-cyan-500/20 text-cyan-400 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shrink-0">
                  {idx + 1}
                </div>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <label className="text-xs text-gray-400 block mb-1">모듈 제목</label>
                    <input 
                      type="text" 
                      value={item.title}
                      onChange={(e) => {
                        const newCur = [...curriculum];
                        newCur[idx].title = e.target.value;
                        setCurriculum(newCur);
                      }}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-cyan-500 outline-none mb-4"
                    />
                    <label className="text-xs text-gray-400 block mb-1">설명</label>
                    <textarea 
                      value={item.description}
                      onChange={(e) => {
                        const newCur = [...curriculum];
                        newCur[idx].description = e.target.value;
                        setCurriculum(newCur);
                      }}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-cyan-500 outline-none h-16"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 block mb-1">소요 시간</label>
                    <input 
                      type="text" 
                      value={item.duration}
                      onChange={(e) => {
                        const newCur = [...curriculum];
                        newCur[idx].duration = e.target.value;
                        setCurriculum(newCur);
                      }}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-cyan-500 outline-none mb-4"
                    />
                    <button 
                      onClick={() => {
                        const newCur = curriculum.filter((_, i) => i !== idx);
                        setCurriculum(newCur);
                      }}
                      className="w-full border border-red-500/30 text-red-400 py-2 rounded-lg hover:bg-red-500/10 transition mt-2 flex items-center justify-center gap-2"
                    >
                      <Trash2 size={16}/> 삭제
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <button 
              onClick={() => {
                setCurriculum([...curriculum, { id: Date.now().toString(), title: '', description: '', duration: '' }]);
              }}
              className="w-full bg-white/5 border border-dashed border-white/20 py-8 rounded-2xl flex items-center justify-center gap-2 hover:bg-white/10 transition text-gray-400"
            >
              <Plus size={24}/> 새 모듈 추가
            </button>
          </div>
        )}

        <div className="fixed bottom-10 right-10">
           <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-full shadow-2xl flex items-center gap-2 transition transform hover:scale-105">
             <Save size={20}/> 전체 변경사항 저장
           </button>
        </div>
      </div>
    </div>
  );
};
