import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft, FiPlus, FiTrash2, FiFileText, FiUploadCloud, FiLink, FiUsers, FiMail, FiUser, FiBriefcase } from 'react-icons/fi';

// Kiểu dữ liệu TypeScript
interface Milestone {
  id: number;
  name: string;
  duration: number;
  cost: number;
  trackCount: number;
  revisionCount: number;
}

interface User {
    name: string;
    avatarUrl: string;
}

interface ProjectData {
  currentUser: User;
  projectScope: 'personal' | 'client' | null;
  projectName: string;
  projectImage: File | null;
  projectImagePreview: string;
  client: string;
  projectType: string;
  description: string;
  partyA: string;
  partyB: string;
  scopeSummary: string;
  totalFee: number;
  paymentType: 'full' | 'milestone';
  milestones: Milestone[];
  members: { email: string; role: string }[];
}

const initialData: ProjectData = {
  currentUser: {
      name: 'Alex Thorne',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
  },
  projectScope: null,
  projectName: '',
  projectImage: null,
  projectImagePreview: '',
  client: '',
  projectType: 'Single',
  description: '',
  partyA: 'Alex Thorne (Producer)',
  partyB: '',
  scopeSummary: '',
  totalFee: 0,
  paymentType: 'milestone',
  milestones: [
    { id: 1, name: 'Bàn giao cuối cùng', duration: 14, cost: 0, trackCount: 1, revisionCount: 3 }
  ],
  members: [],
};


function CreateProjectPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [projectData, setProjectData] = useState<ProjectData>(initialData);
  const [inviteMethod, setInviteMethod] = useState<'friends' | 'email' | 'link'>('email');

  useEffect(() => {
    if (projectData.paymentType === 'milestone') {
      const total = projectData.milestones.reduce((sum, m) => sum + m.cost, 0);
      setProjectData(p => ({ ...p, totalFee: total }));
    } else {
       setProjectData(p => ({ ...p, totalFee: p.milestones[0]?.cost || 0 }));
    }
  }, [projectData.milestones, projectData.paymentType]);
  
  useEffect(() => {
    setProjectData(p => ({ ...p, partyB: p.client, partyA: `${p.currentUser.name} (Producer)` }));
  }, [projectData.client, projectData.currentUser]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProjectData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProjectData(p => ({ ...p, projectImage: file, projectImagePreview: URL.createObjectURL(file) }));
    }
  };

  const handleMilestoneChange = (index: number, field: keyof Milestone, value: string | number) => {
    const newMilestones = [...projectData.milestones];
    (newMilestones[index] as any)[field] = value;
    setProjectData(p => ({ ...p, milestones: newMilestones }));
  };
  
  const addMilestone = () => {
    setProjectData(p => ({ ...p, milestones: [...p.milestones, { id: Date.now(), name: '', duration: 7, cost: 0, trackCount: 1, revisionCount: 2 }] }));
  };

  const removeMilestone = (id: number) => {
    setProjectData(p => ({ ...p, milestones: p.milestones.filter(m => m.id !== id) }));
  };

  const handleScopeSelect = (scope: 'personal' | 'client') => {
      setProjectData(p => ({...p, projectScope: scope}));
      setCurrentStep(1);
  };

  const nextStep = () => {
      if (currentStep === 1 && projectData.projectScope === 'personal') {
          setCurrentStep(3);
      } else {
          setCurrentStep(prev => Math.min(prev + 1, 3));
      }
  };

  const prevStep = () => {
      if (currentStep === 3 && projectData.projectScope === 'personal') {
          setCurrentStep(1);
      } else {
          setCurrentStep(prev => Math.max(prev - 1, 0));
      }
  };

  const handleSubmit = () => {
    console.log("Final Project Data:", projectData);
    alert('Dự án đã được tạo thành công!');
  };
  
  const renderStepIndicator = () => {
    if (currentStep === 0) return null;

    const steps = projectData.projectScope === 'client' 
      ? ['Thông tin', 'Hợp đồng', 'Thành viên']
      : ['Thông tin', 'Thành viên'];
    
    let effectiveStep = currentStep;
    if (projectData.projectScope === 'personal' && currentStep === 3) {
      effectiveStep = 2;
    }

    return (
      <div className="flex items-center justify-center space-x-4 mb-12">
        {steps.map((label, index) => (
          <React.Fragment key={label}>
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all ${effectiveStep > index + 1 ? 'bg-green-500 text-white' : effectiveStep === index + 1 ? 'bg-accent text-white' : 'bg-dark-surface border-2 border-border-color text-text-secondary'}`}>
                {index + 1}
              </div>
              <p className={`ml-3 font-medium ${effectiveStep === index + 1 ? 'text-white' : 'text-text-secondary'}`}>{label}</p>
            </div>
            {index < steps.length - 1 && <div className="h-0.5 w-16 bg-border-color" />}
          </React.Fragment>
        ))}
      </div>
    );
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-8">Bạn muốn tạo loại dự án nào?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <button onClick={() => handleScopeSelect('personal')} className="bg-dark-surface p-8 rounded-2xl border-2 border-border-color hover:border-accent hover:bg-accent/10 transition-all text-left">
                        <FiUser size={32} className="text-accent mb-4"/>
                        <h3 className="text-xl font-bold text-white mb-2">Dự án Cá nhân</h3>
                        <p className="text-text-secondary">Dành cho ý tưởng cá nhân, beat, demo không có khách hàng cụ thể.</p>
                    </button>
                     <button onClick={() => handleScopeSelect('client')} className="bg-dark-surface p-8 rounded-2xl border-2 border-border-color hover:border-accent hover:bg-accent/10 transition-all text-left">
                        <FiBriefcase size={32} className="text-accent mb-4"/>
                        <h3 className="text-xl font-bold text-white mb-2">Dự án Hợp tác</h3>
                        <p className="text-text-secondary">Dành cho dự án có khách hàng, yêu cầu hợp đồng và thanh toán.</p>
                    </button>
                </div>
            </div>
        );
      case 1:
        return (
            <div className="space-y-8 max-w-3xl mx-auto">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white">Thông tin Cơ bản của Dự án</h2>
                <p className="text-text-secondary mt-2">Bắt đầu bằng cách điền các thông tin chính cho dự án của bạn.</p>
              </div>
              
              <div className="bg-dark-bg p-4 rounded-lg flex items-center">
                <img src={projectData.currentUser.avatarUrl} alt="Producer" className="w-12 h-12 rounded-full object-cover"/>
                <div className="ml-4">
                    <p className="font-bold text-text-primary">{projectData.currentUser.name}</p>
                    <p className="text-sm text-text-secondary">Producer (Người tạo dự án)</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                    <label className="text-sm font-medium text-text-secondary block mb-2">Ảnh đại diện Dự án</label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-border-color px-6 py-10 bg-dark-bg">
                      <div className="text-center">
                        {projectData.projectImagePreview ? (
                            <img src={projectData.projectImagePreview} alt="Project preview" className="mx-auto h-24 w-24 object-cover rounded-lg"/>
                        ) : (
                            <FiUploadCloud className="mx-auto h-12 w-12 text-text-secondary" />
                        )}
                        <div className="mt-4 flex text-sm leading-6 text-text-secondary">
                          <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-semibold text-accent"><input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept="image/*" /><span>Tải ảnh lên</span></label>
                          <p className="pl-1">hoặc kéo thả</p>
                        </div>
                      </div>
                    </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-text-secondary block mb-2">Tên dự án</label>
                  <input type="text" name="projectName" value={projectData.projectName} onChange={handleInputChange} className="w-full bg-dark-bg border border-border-color text-text-primary rounded-lg p-3" />
                </div>
                 {projectData.projectScope === 'client' && (
                    <div>
                        <label className="text-sm font-medium text-text-secondary block mb-2">Khách hàng / Nghệ sĩ</label>
                        <input type="text" name="client" value={projectData.client} onChange={handleInputChange} className="w-full bg-dark-bg border border-border-color text-text-primary rounded-lg p-3" />
                    </div>
                 )}
                <div>
                  <label className="text-sm font-medium text-text-secondary block mb-2">Loại dự án</label>
                  <select name="projectType" value={projectData.projectType} onChange={handleInputChange} className="w-full bg-dark-bg border border-border-color text-text-primary rounded-lg p-3">
                    <option>Single</option>
                    <option>EP/Album</option>
                    <option>Sản xuất Beat</option>
                    <option>Remix</option>
                    <option>Cover</option>
                    <option>Nhạc phim</option>
                    <option>Podcast/Intro</option>
                  </select>
                </div>
              </div>
            </div>
        );
      case 2:
        return (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-8">Thiết lập Hợp đồng & Thanh toán</h2>
              <div className="bg-dark-bg p-6 rounded-lg border border-border-color">
                <h3 className="text-xl font-bold text-white mb-4">Phần A: Thông tin Cơ bản</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div><label className="text-sm text-text-secondary">Tên dự án</label><p className="font-bold text-text-primary mt-1">{projectData.projectName || '(Chưa có)'}</p></div>
                    <div><label className="text-sm text-text-secondary">Bên B (Khách hàng)</label><p className="font-bold text-text-primary mt-1">{projectData.client || '(Chưa có)'}</p></div>
                    <div><label className="text-sm text-text-secondary">Bên A (Producer)</label><p className="font-bold text-text-primary mt-1">{projectData.partyA}</p></div>
                    <div><label className="text-sm text-text-secondary">Tổng chi phí</label><p className="font-bold text-accent text-2xl mt-1">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(projectData.totalFee)}</p></div>
                    <div className="md:col-span-2"><label className="text-sm text-text-secondary block mb-1">Tóm tắt Phạm vi Công việc</label><textarea name="scopeSummary" value={projectData.scopeSummary} onChange={handleInputChange} rows={3} className="w-full bg-[#2c2d3c] border border-border-color text-text-primary rounded-lg p-3"></textarea></div>
                </div>

                <hr className="border-border-color my-8" />
                <h3 className="text-xl font-bold text-white mb-4">Phần B: Cột mốc & Thanh toán</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <button onClick={() => setProjectData(p => ({...p, paymentType: 'full'}))} className={`p-4 rounded-lg border-2 text-left ${projectData.paymentType === 'full' ? 'border-accent bg-accent/10' : 'border-border-color'}`}><p className="font-bold">Thanh toán Toàn bộ</p></button>
                    <button onClick={() => setProjectData(p => ({...p, paymentType: 'milestone'}))} className={`p-4 rounded-lg border-2 text-left ${projectData.paymentType === 'milestone' ? 'border-accent bg-accent/10' : 'border-border-color'}`}><p className="font-bold">Thanh toán theo Cột mốc</p></button>
                </div>
                {projectData.paymentType === 'milestone' && (
                    <div className="space-y-4">
                        {projectData.milestones.map((milestone, index) => (
                           <div key={milestone.id} className="bg-dark-surface p-4 rounded-lg border border-border-color grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                                <input type="text" placeholder="Tên cột mốc" value={milestone.name} onChange={e => handleMilestoneChange(index, 'name', e.target.value)} className="md:col-span-2 w-full bg-[#2c2d3c] border border-border-color rounded-lg p-2" />
                                <input type="number" placeholder="Số ngày" value={milestone.duration} onChange={e => handleMilestoneChange(index, 'duration', parseInt(e.target.value))} className="w-full bg-[#2c2d3c] border border-border-color rounded-lg p-2" />
                                <input type="number" placeholder="Chi phí (VNĐ)" value={milestone.cost} onChange={e => handleMilestoneChange(index, 'cost', parseInt(e.target.value))} className="w-full bg-[#2c2d3c] border border-border-color rounded-lg p-2" />
                                <button onClick={() => removeMilestone(milestone.id)} className="text-text-secondary hover:text-red-500"><FiTrash2 size={20}/></button>
                           </div>
                        ))}
                        <button onClick={addMilestone} className="flex items-center space-x-2 text-accent font-bold py-2 px-4 rounded-lg hover:bg-accent/10"><FiPlus/><span>Thêm Cột mốc</span></button>
                    </div>
                )}
              </div>
            </div>
        );
      case 3:
        return (
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Mời Thành viên</h2>
            <div className="flex justify-center border-b border-border-color mb-6">
                <button onClick={() => setInviteMethod('email')} className={`px-6 py-3 font-medium ${inviteMethod === 'email' ? 'border-b-2 border-accent text-accent' : 'text-text-secondary'}`}><FiMail className="inline mr-2"/>Mời qua Email</button>
                <button onClick={() => setInviteMethod('friends')} className={`px-6 py-3 font-medium ${inviteMethod === 'friends' ? 'border-b-2 border-accent text-accent' : 'text-text-secondary'}`}><FiUsers className="inline mr-2"/>Mời từ Bạn bè</button>
                <button onClick={() => setInviteMethod('link')} className={`px-6 py-3 font-medium ${inviteMethod === 'link' ? 'border-b-2 border-accent text-accent' : 'text-text-secondary'}`}><FiLink className="inline mr-2"/>Mời qua Link</button>
            </div>
            {inviteMethod === 'email' && <div className="text-center">Form mời qua email...</div>}
            {inviteMethod === 'friends' && <div className="text-center">Danh sách bạn bè...</div>}
            {inviteMethod === 'link' && <div className="text-center">Tạo link mời...</div>}
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="bg-dark-bg min-h-screen font-inter text-text-primary p-8">
      <div className="max-w-7xl mx-auto">
        {renderStepIndicator()}
        
        <div className={`bg-dark-surface p-8 rounded-2xl border border-border-color mt-8 min-h-[500px] flex items-center justify-center ${currentStep > 0 ? 'items-start' : ''}`}>
          {renderStepContent()}
        </div>

        {currentStep > 0 && (
            <div className="flex justify-between mt-8">
              <button onClick={prevStep} className="bg-border-color text-text-primary font-bold py-3 px-6 rounded-lg flex items-center"><FiChevronLeft /><span>Quay lại</span></button>
              {currentStep < 3 ? (
                <button onClick={nextStep} className="bg-accent text-white font-bold py-3 px-6 rounded-lg flex items-center"><span>Tiếp tục</span><FiChevronRight /></button>
              ) : (
                 <button onClick={handleSubmit} className="bg-green-500 text-white font-bold py-3 px-6 rounded-lg">Hoàn tất & Tạo Dự án</button>
              )}
            </div>
        )}
      </div>
    </div>
  );
}

export default CreateProjectPage;