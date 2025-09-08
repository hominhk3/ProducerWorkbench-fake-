import React from 'react';
import { FiPlus, FiMoreVertical, FiPaperclip, FiMessageSquare, FiTrendingUp, FiCheckCircle, FiPieChart, FiUsers } from 'react-icons/fi';
import { FaStar, FaRegStar } from 'react-icons/fa';
import type { Project, Member, Milestone } from '../types';

const projectData: Project = {
  id: 1,
  name: 'Starlight Vocal Mix',
  client: 'Luna',
  imageUrl: 'https://images.unsplash.com/photo-1516269613936-48c93545d4f3?w=400',
  status: 'Đang thực hiện',
  progress: 60,
  totalFee: 15000000,
  balance: 7500000,
  members: [
    { id: 1, name: 'Alex Thorne', avatarUrl: 'https://i.pravatar.cc/150?img=1', role: 'Producer', permission: 'Collaborator' },
    { id: 2, name: 'Luna', avatarUrl: 'https://i.pravatar.cc/150?img=2', role: 'Vocalist', permission: 'Client' },
    { id: 3, name: 'Kai', avatarUrl: 'https://i.pravatar.cc/150?img=3', role: 'Guitarist', permission: 'Collaborator' },
  ],
  splits: [
    { memberId: 1, job: 'Sản xuất Beat', percentage: 50 },
    { memberId: 2, job: 'Viết lời & Hát', percentage: 40 },
    { memberId: 3, job: 'Sáng tác Guitar', percentage: 10 },
  ],
  milestones: [
    { id: 1, name: 'Sản xuất Beat', status: 'Đã hoàn thành', assigneeId: 1, deadline: '2025-08-10', cost: 7500000 },
    { id: 2, name: 'Thu âm Vocal', status: 'Đang làm', assigneeId: 2, deadline: '2025-08-20', cost: 5000000 },
    { id: 3, name: 'Final Mix & Master', status: 'Chưa bắt đầu', assigneeId: 1, deadline: '2025-08-30', cost: 2500000 },
  ],
  transactions: [
    { id: 1, date: '2025-08-01', description: 'Luna nạp tiền (trả trước 50%)', amount: 7500000 },
    { id: 2, date: '2025-08-11', description: 'Thanh toán cho cột mốc "Sản xuất Beat"', amount: -7500000 },
    { id: 3, date: '2025-08-11', description: 'Luna nạp tiền cho cột mốc "Thu âm"', amount: 5000000 },
  ],
  files: [
      { id: 1, name: 'starlight_beat_v1.mp3', version: 'v1', uploadedAt: '2025-08-05', commentCount: 3 },
      { id: 2, name: 'starlight_beat_final.wav', version: 'final', uploadedAt: '2025-08-10', commentCount: 1 },
      { id: 3, name: 'starlight_vocal_take1.wav', version: 'take 1', uploadedAt: '2025-08-15', commentCount: 8 },
  ]
};

const StarRating = ({ rating }: { rating: number }) => {
    const totalStars = 5;
    return (
        <div className="flex">
            {[...Array(totalStars)].map((_, index) =>
                index < rating ? <FaStar key={index} className="text-yellow-400" /> : <FaRegStar key={index} className="text-gray-500" />
            )}
        </div>
    );
};


function ProjectDetailsPage() {
  const getMemberById = (id: number) => projectData.members.find(m => m.id === id);

  const milestoneStatusClasses: { [key: string]: string } = {
    'Chưa bắt đầu': 'bg-gray-500/20 text-gray-400 border-gray-700',
    'Đang làm': 'bg-blue-500/20 text-blue-400 border-blue-800',
    'Chờ duyệt': 'bg-yellow-500/20 text-yellow-400 border-yellow-800',
    'Đã hoàn thành': 'bg-green-500/20 text-green-400 border-green-800',
  };

  const progressColorClass = projectData.progress < 50 ? 'bg-yellow-500' : projectData.progress < 100 ? 'bg-blue-500' : 'bg-green-500';

  return (
    <div className="bg-dark-bg min-h-screen font-inter text-text-primary p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        
        <header className="bg-dark-surface p-6 rounded-2xl border border-border-color mb-8 transition-all hover:shadow-2xl hover:shadow-accent/10">
            <div className="flex flex-col sm:flex-row items-start gap-6">
                <img src={projectData.imageUrl} alt={projectData.name} className="w-full sm:w-32 h-32 object-cover rounded-lg shadow-lg"/>
                <div className="w-full">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-semibold text-accent">{projectData.status}</p>
                            <h1 className="text-3xl font-bold text-white mt-1">{projectData.name}</h1>
                            <p className="text-text-secondary font-medium mt-1">Khách hàng: {projectData.client}</p>
                        </div>
                        <div className="flex space-x-2">
                             <button className="bg-accent text-white font-bold py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-opacity-80 transition-transform hover:scale-105 text-sm">
                                <FiPlus />
                                <span>Tải File</span>
                            </button>
                            <button className="p-2 bg-dark-bg rounded-lg border border-border-color text-text-secondary hover:text-white transition-colors"><FiMoreVertical/></button>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-text-secondary">Tiến độ</span>
                            <span className="text-sm font-bold text-white">{projectData.progress}%</span>
                        </div>
                        <div className="w-full bg-dark-bg rounded-full h-2.5">
                            <div className={`h-2.5 rounded-full transition-all duration-500 ${progressColorClass}`} style={{width: `${projectData.progress}%`}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <main className="lg:col-span-2 space-y-8">
                <section className="bg-dark-surface p-6 rounded-xl border border-border-color">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-white">Cột mốc (Milestones)</h2>
                        <button className="text-sm bg-accent/10 text-accent font-semibold py-1.5 px-3 rounded-md hover:bg-accent/20 transition-colors flex items-center space-x-2">
                           <FiPlus size={16}/><span>Thêm Cột mốc</span>
                        </button>
                    </div>
                    <div className="space-y-4">
                        {projectData.milestones.map(m => (
                            <div key={m.id} className="bg-dark-bg p-4 rounded-lg border border-border-color transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
                                 <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-text-primary">{m.name}</h3>
                                        <p className="text-xs text-text-secondary mt-1">Deadline: {m.deadline}</p>
                                    </div>
                                    <div className={`text-xs font-semibold px-3 py-1 rounded-full border ${milestoneStatusClasses[m.status]}`}>{m.status}</div>
                                 </div>
                                 <div className="flex items-center justify-between mt-3 pt-3 border-t border-border-color/50">
                                     <div className="flex items-center space-x-2">
                                         <img src={getMemberById(m.assigneeId)?.avatarUrl} className="w-6 h-6 rounded-full" alt={getMemberById(m.assigneeId)?.name} />
                                         <span className="text-sm text-text-secondary">{getMemberById(m.assigneeId)?.name}</span>
                                     </div>
                                     <p className="text-sm text-accent font-bold">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(m.cost)}</p>
                                 </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-dark-surface p-6 rounded-xl border border-border-color">
                     <h2 className="text-xl font-bold text-white mb-4">Lịch Sử Phản hồi</h2>
                      <div className="grid grid-cols-1">
                        {projectData.files.map(file => (
                            <div key={file.id} className="flex justify-between items-center py-4 px-2 border-b border-border-color last:border-b-0 hover:bg-dark-bg rounded-lg cursor-pointer transition-colors -mx-2">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-accent/10 p-2 rounded-lg text-accent"><FiPaperclip/></div>
                                    <div>
                                        <p className="font-medium text-text-primary">{file.name}</p>
                                        <p className="text-xs text-text-secondary">Version: {file.version} - Uploaded: {file.uploadedAt}</p>
                                    </div>
                                </div>
                                <div className="text-sm text-text-secondary flex items-center">
                                    <FiMessageSquare className="mr-2"/>
                                    {file.commentCount}
                                </div>
                            </div>
                        ))}
                      </div>
                 </section>
            </main>

            <aside className="lg:col-span-1 space-y-8">
                <section className="bg-dark-surface p-6 rounded-xl border border-border-color">
                     <h2 className="text-xl font-bold text-white mb-6">Ví tiền Dự án</h2>
                     <div className="space-y-4 mb-6">
                         <div className="flex justify-between items-center bg-dark-bg p-3 rounded-lg">
                            <div className="flex items-center space-x-2 text-sm text-text-secondary"><FiPieChart/><span>Tổng kinh phí</span></div>
                            <p className="font-bold text-white">{new Intl.NumberFormat('vi-VN').format(projectData.totalFee)}</p>
                         </div>
                         <div className="flex justify-between items-center bg-dark-bg p-3 rounded-lg">
                            <div className="flex items-center space-x-2 text-sm text-text-secondary"><FiCheckCircle className="text-green-400"/><span>Đã thanh toán</span></div>
                            <p className="font-bold text-green-400">{new Intl.NumberFormat('vi-VN').format(projectData.balance)}</p>
                         </div>
                          <div className="flex justify-between items-center bg-dark-bg p-3 rounded-lg">
                            <div className="flex items-center space-x-2 text-sm text-text-secondary"><FiTrendingUp className="text-yellow-400"/><span>Còn lại</span></div>
                            <p className="font-bold text-yellow-400">{new Intl.NumberFormat('vi-VN').format(projectData.totalFee - projectData.balance)}</p>
                         </div>
                     </div>
                      <h3 className="font-bold text-white text-md mb-4 pt-4 border-t border-border-color">Lịch sử Giao dịch</h3>
                      <div className="space-y-3">
                         {projectData.transactions.map(t => (
                             <div key={t.id} className="flex justify-between items-center text-sm">
                                 <div>
                                     <p className="font-medium text-text-primary">{t.description}</p>
                                     <p className="text-xs text-text-secondary">{t.date}</p>
                                 </div>
                                 <p className={`font-bold ${t.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                                     {t.amount > 0 ? '+' : ''}{new Intl.NumberFormat('vi-VN').format(t.amount)}
                                 </p>
                             </div>
                         ))}
                      </div>
                 </section>

                 <section className="bg-dark-surface p-6 rounded-xl border border-border-color">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="font-bold text-white text-xl">Thành viên</h2>
                        <button className="text-sm text-accent hover:underline flex items-center space-x-1"><FiPlus size={14}/><span>Mời</span></button>
                    </div>
                     <div className="space-y-4 mb-6">
                         {projectData.members.map(mem => (
                             <div key={mem.id} className="flex items-center justify-between">
                                 <div className="flex items-center space-x-3">
                                     <img src={mem.avatarUrl} alt={mem.name} className="w-10 h-10 rounded-full"/>
                                     <div>
                                         <p className="font-bold text-text-primary">{mem.name}</p>
                                         <p className="text-sm text-text-secondary">{mem.role}</p>
                                     </div>
                                 </div>
                                  <p className="text-xs font-medium text-text-secondary">{mem.permission}</p>
                             </div>
                         ))}
                     </div>
                     <h3 className="font-bold text-white text-md mb-4 pt-4 border-t border-border-color">Bảng Phân chia</h3>
                     <div className="space-y-3 text-sm">
                        {projectData.splits.map(split => (
                            <div key={split.memberId} className="flex items-center justify-between">
                                <div className="flex items-center space-x-2"><FiUsers size={14} className="text-text-secondary"/> <span className="text-text-primary">{getMemberById(split.memberId)?.name}</span></div>
                                <p className="font-bold text-accent">{split.percentage}%</p>
                            </div>
                        ))}
                     </div>
                </section>
            </aside>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsPage;