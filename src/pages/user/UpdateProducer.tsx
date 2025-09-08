import React, { useState } from 'react';
import { FiCheckCircle, FiXCircle, FiArrowRight } from 'react-icons/fi';

const features = [
    { name: 'Số lượng dự án', free: 'Giới hạn 3', pro: 'Không giới hạn', pro_strong: true },
    { name: 'Dung lượng lưu trữ', free: '5 GB', pro: '100 GB', pro_strong: true },
    { name: 'Soạn thảo Hợp đồng', free: 'Mẫu cơ bản', pro: 'Toàn bộ mẫu & Chữ ký điện tử', pro_strong: true },
    { name: 'Ví tiền Dự án', free: false, pro: true, pro_strong: true },
    { name: 'Quản lý Phân chia (Split Sheet)', free: false, pro: true, pro_strong: true },
    { name: 'Thành viên/dự án', free: 'Tối đa 2', pro: 'Không giới hạn', pro_strong: false },
    { name: 'Hỗ trợ Ưu tiên', free: false, pro: true, pro_strong: true },
];

const testimonials = [
    { quote: 'Workbench Pro đã thay đổi hoàn toàn cách tôi làm việc. Tính năng Ví tiền và Hợp đồng giúp tôi trông chuyên nghiệp hơn rất nhiều.', name: 'Luna', role: 'Vocalist & Songwriter' },
    { quote: 'Không còn phải lo lắng về việc lưu trữ hay giới hạn dự án. Tôi có thể tập trung hoàn toàn vào âm nhạc.', name: 'Kai', role: 'Music Producer' },
];

const faqs = [
    { q: 'Tôi có thể hủy gói Pro bất cứ lúc nào không?', a: 'Có, bạn có thể hủy đăng ký bất kỳ lúc nào. Bạn sẽ giữ lại quyền truy cập các tính năng Pro cho đến cuối chu kỳ thanh toán hiện tại của mình.' },
    { q: 'Phương thức thanh toán được chấp nhận là gì?', a: 'Chúng tôi chấp nhận thanh toán qua Momo, ZaloPay, thẻ tín dụng/ghi nợ (Visa, Mastercard), và chuyển khoản ngân hàng qua mã VNQR.' },
    { q: 'Dữ liệu của tôi có được an toàn không?', a: 'Tuyệt đối. Chúng tôi sử dụng các tiêu chuẩn mã hóa hàng đầu để đảm bảo tất cả các file và dữ liệu dự án của bạn luôn được an toàn và bảo mật.' },
];


function UpdateProducer() {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
    const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

    return (
        <div className="bg-dark-bg font-inter text-text-primary antialiased">
            <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">

                <section className="text-center py-16 sm:py-24">
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tighter">
                        Giải phóng Toàn bộ Sức mạnh của bạn
                    </h1>
                    <p className="max-w-2xl mx-auto mt-6 text-lg text-text-secondary">
                        Truy cập các công cụ chuyên nghiệp, không giới hạn dự án và các tính năng hợp tác cao cấp được thiết kế dành riêng cho producer.
                    </p>
                </section>

                <section className="bg-dark-surface p-6 sm:p-8 rounded-2xl border border-border-color">
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="font-bold text-white text-left">Tính năng</div>
                        <div className="font-bold text-white">Miễn phí</div>
                        <div className="font-bold text-accent border-2 border-accent rounded-lg py-1">PRO</div>
                    </div>

                    <div className="divide-y divide-border-color mt-4">
                        {features.map((feature) => (
                            <div key={feature.name} className="grid grid-cols-3 gap-4 py-4 items-center">
                                <div className="text-text-primary text-sm font-medium">{feature.name}</div>
                                <div className="text-center text-text-secondary text-sm">
                                    {typeof feature.free === 'boolean' ? 
                                        (feature.free ? <FiCheckCircle className="mx-auto text-green-500" /> : <FiXCircle className="mx-auto text-gray-600" />) 
                                        : feature.free}
                                </div>
                                <div className={`text-center font-semibold text-sm ${feature.pro_strong ? 'text-accent' : 'text-text-primary'}`}>
                                     {typeof feature.pro === 'boolean' ? 
                                        (feature.pro ? <FiCheckCircle className="mx-auto text-green-500" /> : <FiXCircle className="mx-auto text-gray-600" />) 
                                        : feature.pro}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                
                <section className="my-16 sm:my-24">
                    <div className="max-w-md mx-auto bg-dark-surface p-8 rounded-2xl border border-border-color text-center shadow-2xl shadow-accent/10">
                        <div className="flex justify-center items-center mb-6">
                            <span className={`font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-text-secondary'}`}>Tháng</span>
                            <button onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')} className="mx-4 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-border-color transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark-surface">
                                <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${billingCycle === 'yearly' ? 'translate-x-5' : 'translate-x-0'}`}></span>
                            </button>
                             <span className={`font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-text-secondary'}`}>Năm</span>
                             <span className="ml-3 text-xs font-bold bg-green-500/20 text-green-400 py-1 px-2 rounded-md">TIẾT KIỆM 20%</span>
                        </div>
                        
                        <div>
                             {billingCycle === 'monthly' ? (
                                <p className="text-4xl font-bold text-white">500,000 <span className="text-lg font-medium text-text-secondary">VNĐ / tháng</span></p>
                            ) : (
                                <p className="text-4xl font-bold text-white">5,000,000 <span className="text-lg font-medium text-text-secondary">VNĐ / năm</span></p>
                            )}
                        </div>
                        
                        <button onClick={() => setPaymentModalOpen(true)} className="w-full bg-accent text-white font-bold py-3 rounded-lg mt-8 hover:bg-opacity-80 transition-transform hover:scale-105">
                            Nâng cấp lên Pro ngay
                        </button>
                    </div>
                </section>

                <section className="my-16 sm:my-24">
                     <h2 className="text-3xl font-bold text-white text-center mb-12">Được tin dùng bởi các Producer hàng đầu</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((t) => (
                            <figure key={t.name} className="bg-dark-surface p-6 rounded-xl border border-border-color">
                                <blockquote className="text-text-secondary italic">"{t.quote}"</blockquote>
                                <figcaption className="mt-4 flex items-center space-x-3">
                                    <div className="font-bold text-text-primary">{t.name}</div>
                                    <div className="text-sm text-text-secondary">{t.role}</div>
                                </figcaption>
                            </figure>
                        ))}
                     </div>
                </section>

                <section className="my-16 sm:my-24 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">Câu hỏi Thường gặp</h2>
                    <div className="space-y-4">
                        {faqs.map((faq) => (
                             <details key={faq.q} className="bg-dark-surface p-4 rounded-lg border border-border-color cursor-pointer">
                                <summary className="font-semibold text-text-primary flex justify-between items-center">
                                    {faq.q}
                                    <FiArrowRight className="transform transition-transform duration-200 group-open:rotate-90"/>
                                </summary>
                                <p className="text-text-secondary mt-2 text-sm leading-relaxed">{faq.a}</p>
                             </details>
                        ))}
                    </div>
                </section>
            </div>

            {isPaymentModalOpen && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center animate-fade-in p-4">
                     <div className="bg-dark-surface w-full max-w-md rounded-2xl border border-border-color p-8 relative">
                        <button onClick={() => setPaymentModalOpen(false)} className="absolute top-4 right-4 text-text-secondary hover:text-white">&times;</button>
                        <h2 className="text-2xl font-bold text-white mb-2">Xác nhận Nâng cấp</h2>
                        <p className="text-text-secondary mb-6">Bạn đang nâng cấp lên <span className="font-bold text-accent">Producer Workbench Pro</span> ({billingCycle === 'yearly' ? 'Gói Năm' : 'Gói Tháng'}).</p>
                        
                        <div>
                            {/* Khu vực Thanh toán sẽ được tích hợp ở đây */}
                            <div className="h-48 flex items-center justify-center bg-dark-bg rounded-lg">
                                <p className="text-text-secondary">Giao diện thanh toán...</p>
                            </div>
                        </div>

                        <button className="w-full bg-accent text-white font-bold py-3 rounded-lg mt-6 hover:bg-opacity-80">
                           Thanh toán & Kích hoạt Pro
                        </button>
                     </div>
                </div>
            )}
        </div>
    );
}
export default UpdateProducer;