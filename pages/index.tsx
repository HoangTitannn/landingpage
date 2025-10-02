import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Menu,
  X,
  ChevronRight,
  ClipboardCheck,
  ChartColumnBig,
  ListChecks,
  HandCoins,
  Star,
  Atom,
  Check,
  Zap,
  Target,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import LogoEdu from "@/components/layout/logo-edu";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const testimonials = [
    {
      name: "Anh Vinh",
      title: "",
      rating: 5,
      content:
        "Cảm ơn thầy Trung và team FireAnt hỗ trợ nhiệt tình trong suốt khoá học. Mong FireAnt sớm mở thêm cả khoá học Wyckoff và nhiều khoá PTKT khác cho anh em nào quan tâm.",
      image: "/images/users/11.jpg",
    },
    {
      name: "Anh Hoàng",
      title: "",
      rating: 4.5,
      content:
        "Ngoài nội dung giảng dạy, thầy Trung cung cấp nhiều thông tin khác hữu ích cho việc đầu tư. Recommend cho các bạn muốn biết thêm những thứ không có trong sách vở.",
      image: "/images/users/13.jpg",
    },
    {
      name: "Chị Thuý",
      title: "",
      rating: 5,
      content:
        "Thầy hỗ trợ em nhiều trong lúc thực hành vẽ đồ thị, mỗi buổi đều có chữa bài tập và video record để xem lại nên cảm thấy khoá học vô cùng đáng tiền.",
      image: "/images/users/10.jpg",
    },
    {
      name: "Anh Dương",
      title: "",
      rating: 4.5,
      content:
        "Thầy Trung có những nhận xét quá chuẩn về thị trường. Thầy cũng hỗ trợ học viên để có thể tự phân tích. Cảm ơn những định hướng chính xác của thầy.",
      image: "/images/users/09.webp",
    },
    {
      name: "Chị Diệu",
      title: "",
      rating: 5,
      content:
        "Video bài giảng luôn được FireAnt đẩy lên ngay sau buổi học, giúp mình ôn tập kiến thức trước khi sang buổi học tiếp theo. Nhiều lúc mình bận không tham gia được thì có thể xem lại, quá tiện.",
      image: "/images/users/12.jpeg",
    },
    {
      name: "Anh Khoa",
      title: "",
      rating: 5,
      content:
        "Cảm ơn FireAnt đã tổ chức khoá học cung cấp kiến thức và kinh nghiệm thị trường rất hữu ích cho học viên. Hi vọng có cơ hội tiếp tục đồng hành!",
      image: "/images/users/15.jpg",
    },
    {
      name: "Anh Hiếu",
      title: "",
      rating: 4.5,
      content:
        "Nhờ có kinh nghiệm giao dịch quý giá của thày Trung mà em đã tự phân tích và chốt lãi lần đầu tiên trên thị trường. Mong thầy và team FireAnt có thêm nhiều khoá học khác.",
      image: "/images/users/16.jpg",
    },
    {
      name: "Anh Tuấn",
      title: "",
      rating: 5,
      content:
        "Anh Trung vẫn hỗ trợ anh em nhà đầu tư sau khi kết thúc khoá học, nhận định rất chính xác.",
      image: "/images/users/17.jpg",
    },
  ];

  const curriculum = [
    {
      chapter: "Chương 1",
      title: "VSA ÁP DỤNG TRONG THỰC TẾ GIAO DỊCH",
      sessions: [
        {
          session: "Bài 1",
          title: "ÔN TẬP",
          topics: ["Ôn tập kiến thức tổng hợp", "Hỏi đáp và giải đáp thắc mắc"],
        },
        {
          session: "Bài 2",
          title: "PHÂN TÍCH VSA TRONG BỐI CẢNH THỊ TRƯỜNG CỤ THỂ",
          topics: [
            "Kiến thức nền tảng khi phân tích chiều dài của nến và khối lượng",
            "So sánh bar by bar (so sánh nỗ lực và kết quả giữa các cây nến)",
            "Phân tích VSA trong bối cảnh thị trường tăng điểm",
            "Phân tích VSA trong bối cảnh thị trường giảm điểm",
          ],
        },
        {
          session: "Bài 3",
          title: "PHÂN TÍCH VSA TRÊN CÁC MẪU HÌNH ĐỒ THỊ",
          topics: [
            "Phân tích VSA trên các mẫu hình đảo chiều tại đáy và đỉnh",
            "Phân tích VSA trên mẫu hình tiếp diễn xu hướng",
            "Phân tích VSA trên các mẫu hình của Mark Minervini",
          ],
        },
        {
          session: "Bài 4",
          title: "CHIẾN LƯỢC TREND - LEVEL - SIGNAL",
          topics: [
            "Tổng quan Chiến lược giao dịch Trend - Level - Signal",
            "Phân loại Nhà đầu tư và lựa chọn phù hợp cho bạn",
            "Giao dịch theo xu hướng theo các định nghĩa của Mark Minvervini",
            "Kết hợp cấu trúc nến VSA trong giao dịch theo xu hướng chính",
            "Nguyên tắc và Quy trình giao dịch đa khung thời gian",
            "Xác định điểm mua/bán dựa trên phân tích đa khung thời gian",
          ],
        },
      ],
    },
    {
      chapter: "Chương 2",
      title: "QUẢN TRỊ RỦI RO VÀ PHƯƠNG PHÁP ĐI TIỀN",
      sessions: [
        {
          session: "Bài 5",
          title: "QUẢN TRỊ RỦI RO VÀ PHƯƠNG PHÁP ĐI TIỀN - PHẦN 1",
          topics: [
            "Tầm quan trọng của quản lý rủi ro",
            "Kỹ năng đặt điểm dừng lỗ theo cấu trúc đồ thị và chỉ báo ATR",
            "Kỹ năng đặt điểm trailing stop theo chuyển động đồ thị",
            "Kỹ năng đặt dừng lỗ tự động trên phần mềm giao dịch",
            "Phương pháp đo tỷ lệ Lợi nhuận/Rủi ro của một giao dịch",
            "Phân tích ảnh hưởng của tâm lý trong Quản trị rủi ro",
            "Những kinh nghiệm sống còn trên thị trường",
          ],
        },
        {
          session: "Bài 6",
          title: "QUẢN TRỊ RỦI RO VÀ PHƯƠNG PHÁP ĐI TIỀN - PHẦN 2",
          topics: [
            "Phương pháp tính toán độ lớn vị thế trước khi mở giao dịch mới",
            "Phân tích mối quan hệ giữa Tỷ lệ thắng và Tỷ lệ Lợi nhuận/Rủi ro",
            "Các nguyên tắc trong Quản trị rủi ro",
            "Phương pháp đi tiền Pyramid theo chuyển động của cổ phiếu",
            "Chi tiết điểm mua vào/bán ra trên chuyển động giá",
            "Lập kế hoạch giao dịch và cam kết tuân thủ",
            "Ghi chép Nhật ký giao dịch trên mẫu hình đồ thị",
          ],
        },
      ],
    },
    {
      chapter: "Chương 3",
      title: "PHÂN TÍCH HÀNH ĐỘNG GIÁ",
      sessions: [
        {
          session: "Bài 7",
          title: "PRICE ACTION - PHƯƠNG PHÁP PHÂN TÍCH DỰA TRÊN HÀNH ĐỘNG GIÁ",
          topics: [
            "Nến trending bar và chỉ dẫn giao dịch",
            "Vùng tắc nghẽn và hiệu quả khi sử dụng như các key level",
            "Cấu trúc nến inside bar và mother bar",
          ],
        },
        {
          session: "Bài 8",
          title: "PRICE ACTION - PHƯƠNG PHÁP PHÂN TÍCH (TT)",
          topics: [
            "Nến Pinbar - sức mạnh tín hiệu theo bối cảnh cụ thể",
            "Nến nhấn chìm tăng và nhấn chìm giảm",
            "Nến fakey - Cú lừa của hành động giá",
          ],
        },
      ],
    },
  ];

  // Counting animation effect
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const countUpElements = document.querySelectorAll(".count-up");

    const animateCountUp = (element:any) => {
      const target = parseInt(element.getAttribute("data-target"));
      const duration = 2000; // 2 seconds
      const step = target / (duration / 16); // 60fps
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          element.textContent = target;
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(current);
        }
      }, 16);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCountUp(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });

    countUpElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      if (typeof document !== 'undefined') {
        countUpElements.forEach((element) => {
          observer.unobserve(element);
        });
      }
    };
  }, []);

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-[#394F89] to-[#0F1423] ${inter.className}`}>
      <header className="sticky top-0 z-50 bg-[#394F89] border-b border-b-[#4B5FC2]">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/">
              <LogoEdu color="#FFFFFF" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-300 hover:text-white transition-colors">
                Trang chủ
              </Link>
              <Link
                href="/courses"
                className="text-gray-300 hover:text-white transition-colors">
                Khóa học
              </Link>
              <Link
                href="https://corporate.fireant.vn/"
                className="text-gray-300 hover:text-white transition-colors">
                Về chúng tôi
              </Link>
            </nav>

            <div className="flex items-center">
              <button
                onClick={() => router.push("/course-live/TrungTranVSA_Online")}
                className="block md:hidden rounded-full px-3 py-2 bg-[#9DF6FC] text-[#4B5FC2] text-sm font-medium leading-6">
                Đăng ký ngay
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg text-white">
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors">
                  Trang chủ
                </Link>
                <Link
                  href="/courses"
                  className="text-gray-300 hover:text-white transition-colors">
                  Khóa học
                </Link>
                <Link
                  href="https://corporate.fireant.vn/"
                  className="text-gray-300 hover:text-white transition-colors">
                  Về chúng tôi
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Content 1*/}
      <div className="container max-w-7xl mx-auto px-4 mt-4 sm:mt-8 flex flex-col lg:flex-row gap-8 items-center">
        <div className="flex flex-col items-center sm:items-start gap-6 flex-1 text-white">
          <div className="flex flex-col items-center sm:items-start sm:flex-row gap-4 p-3 rounded-lg sm:px-2 sm:py-1 sm:rounded-full sm:bg-[#4B5FC2] w-fit">
            <p className="py-1 px-3 bg-[#E0FCFD] text-[#4B5FC2] rounded-[10px] text-xs font-medium tracking-[2.5%]">
              KHÓA HỌC VSA NÂNG CAO
            </p>
            <div className="flex items-center gap-2">
              <p className="text-sm font-normal">Giảng viên: Trần Hậu Trung</p>
              <ChevronRight className="w-5 h-5 text-[#9DF6FC] hidden sm:block" />
            </div>
          </div>

          {/* Main Heading */}
          <p className="hidden sm:block text-[40px] md:text-[50px] font-extrabold md:leading-[60px] tracking-[-2.5%]">
            Kỹ năng thực chiến {""} <br />
            <span className="text-[#9DF6FC]">của nhà đầu tư thành công</span>
          </p>

          <p className="sm:hidden text-center text-[36px] font-extrabold leading-[46px] tracking-[-2.5%]">
            Kỹ năng thực chiến {""}
            <span className="text-[#9DF6FC]">của nhà đầu tư thành công</span>
          </p>

          {/* Description */}
          <p className="text-lg text-center sm:text-left sm:text-xl font-normal leading-7">
            Nâng cao kỹ năng đầu tư với phương pháp VSA và Price Action từ
            chuyên gia 20 năm kinh nghiệm trên thị trường chứng khoán Việt Nam
          </p>

          <div className="flex flex-col items-center sm:items-start gap-4 sm:mt-6">
            {/* CTA Button */}
            <button
              onClick={() => router.push("/course-live/TrungTranVSA_Online")}
              className="w-fit px-4 py-3 bg-[#9DF6FC] rounded-full text-[#4B5FC2] text-base font-medium leading-6">
              Đăng ký ngay
            </button>

            {/* Support Info */}
            <p className="text-sm text-center sm:text-left leading-5 text-[#D1D5DB] italic">
              Hỗ trợ viên của FireAnt sẽ liên hệ với bạn trong vòng 24 giờ để
              xác nhận lịch học và xếp lớp
            </p>
          </div>
        </div>
        <Image
          src="/images/marketing/hero-adv-vsa.png"
          alt="VSA Hero"
          width={502}
          height={502}
        />
      </div>

      {/* Content 2 */}
      <div className="bg-[#F9FAFB] pt-[96px]">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p className="text-[36px] font-extrabold leading-[40px] tracking-[-2.5%] text-[#111827]">
              Nhìn lại hành trình Khóa học VSA Nâng cao - K1
            </p>
            <p className="mt-4 text-[#6B7280] text-xl font-light leading-7">
              Khóa học diễn ra trong vòng 3 tuần với 8 buổi học
              <br />
              <span>(từ ngày 18/08/2025 đến 05/09/2025)</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center mt-[96px]">
            {/* Left side - Features */}
            <div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#4B5FC2] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <ClipboardCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-lg text-[#111827] font-medium leading-6">
                    2 buổi học thử diễn ra thành công, với nội dung ôn tập kiến
                    thức VSA cơ bản
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 bg-[#4B5FC2] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <ChartColumnBig className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-lg text-[#111827] font-medium leading-6">
                    Thầy Trung hướng dẫn Học viên phân tích biểu đồ trên FireAnt
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Screenshots */}
            <Image
              src="/images/marketing/recap-free-lesson.png"
              alt="Course Journey"
              width={850}
              height={700}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center mt-[96px]">
            <Image
              src="/images/marketing/recap-analysis.png"
              alt="Course Journey"
              className="order-2 lg:order-1"
              width={850}
              height={700}
            />
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#4B5FC2] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <ListChecks className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-lg text-[#111827] font-medium leading-6">
                    Chữa bài tập đầu buổi học, nhận định thị trường từ thầy
                    Trung
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 bg-[#4B5FC2] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <HandCoins className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-lg text-[#111827] font-medium leading-6">
                    Học viên được hỗ trợ bởi đội ngũ FireAnt và thầy Trung
                    trước, trong và sau khoá học
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content 3 */}
      <div className="pt-[96px] pb-[130px] bg-[#F9FAFB] sm:bg-[linear-gradient(to_bottom,#F9FAFB_60%,white_40%)]">
        <div className="container max-w-[1125px] mx-auto">
          <div className="text-center mt-[64px] mb-10">
            <p className="text-[36px] font-extrabold leading-[40px] tracking-[-2.5%] text-[#111827]">
              Những con số ấn tượng với khóa học đầu tiên
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4 lg:gap-0 lg:grid-cols-4 mx-4">
            {/* Stat 1 */}
            <div className="group relative py-8 px-6 flex flex-col gap-4 items-center bg-white rounded-[16px] lg:rounded-l-[16px] lg:rounded-r-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-[60px] sm:text-[72px] leading-none font-black bg-gradient-to-br from-blue-600 to-[#9DF6FC] bg-clip-text text-transparent drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <span className="count-up" data-target="200">
                    0
                  </span>
                </div>
              </div>
              <p className="relative z-10 text-[#4B5563] text-lg font-semibold leading-6 text-center group-hover:text-blue-700 transition-colors duration-300">
                Học viên đăng ký học thử
              </p>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-[#9DF6FC] rounded-full group-hover:w-16 transition-all duration-500"></div>
            </div>

            {/* Stat 2 */}
            <div className="group relative py-8 px-6 flex flex-col gap-4 items-center bg-white rounded-[16px] lg:rounded-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-[60px] sm:text-[72px] leading-none font-black bg-gradient-to-br from-blue-600 to-[#9DF6FC] bg-clip-text text-transparent drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <span className="count-up" data-target="4">
                    0
                  </span>
                  <span className="text-[40px] sm:text-[48px]">.</span>
                  <span className="count-up" data-target="3">
                    0
                  </span>
                  <span className="text-[30px] sm:text-[36px]">/5</span>
                </div>
              </div>
              <p className="relative z-10 text-[#4B5563] text-lg font-semibold leading-6 text-center group-hover:text-blue-700 transition-colors duration-300">
                Đánh giá học viên sau khóa học
              </p>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-[#9DF6FC] rounded-full group-hover:w-16 transition-all duration-500"></div>
            </div>

            {/* Stat 3 */}
            <div className="group relative py-8 px-6 flex flex-col gap-4 items-center bg-white rounded-[16px] lg:rounded-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-[60px] sm:text-[72px] leading-none font-black bg-gradient-to-br from-blue-600 to-[#9DF6FC] bg-clip-text text-transparent drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <span className="count-up" data-target="8">
                    0
                  </span>
                </div>
              </div>
              <p className="relative z-10 text-[#4B5563] text-lg font-semibold leading-6 text-center group-hover:text-blue-700 transition-colors duration-300">
                Buổi học chuyên sâu, tổ chức đăng kế hoạch
              </p>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-[#9DF6FC] rounded-full group-hover:w-16 transition-all duration-500"></div>
            </div>

            {/* Stat 4 */}
            <div className="group relative py-8 px-6 flex flex-col gap-4 items-center bg-white rounded-[16px] lg:rounded-r-[16px] lg:rounded-l-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-[60px] sm:text-[72px] leading-none font-black bg-gradient-to-br from-blue-600 to-[#9DF6FC] bg-clip-text text-transparent drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <span className="count-up" data-target="50">
                    0
                  </span>
                </div>
              </div>
              <p className="relative z-10 text-[#4B5563] text-lg font-semibold leading-6 text-center group-hover:text-blue-700 transition-colors duration-300">
                Học viên hoàn thành trọn vẹn khóa
              </p>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-[#9DF6FC] rounded-full group-hover:w-16 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content 4 */}
      <div className="py-20 bg-gradient-to-b from-[#394F89] to-[#0F1423]">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Học Viên Nói Gì Về Khóa Học
            </h2>
            <p className="text-gray-400 text-lg">
              Những câu chuyện thành công và trải nghiệm từ cộng đồng học viên
            </p>
          </div>

          {/* Desktop Carousel (md and larger screens) */}
          <div className="hidden md:block relative">
            <Carousel
              plugins={[autoplayPlugin.current]}
              opts={{
                align: "start",
                slidesToScroll: 1,
              }}
              className="w-full">
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-blue-900/20 group h-[280px]">
                      <div className="flex items-center gap-4 mb-4">
                        <Image
                          src={
                            testimonial.image ||
                            "https://via.placeholder.com/150"
                          }
                          alt={testimonial.name}
                          width={56}
                          height={56}
                          className="w-14 h-14 rounded-full object-cover border-2 border-blue-400"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src = "https://via.placeholder.com/150";
                          }}
                        />
                        <div>
                          <h3 className="text-white font-bold">
                            {testimonial.name}
                          </h3>
                          <p className="text-[#E0FCFD] text-sm">
                            VSA Nâng cao - K1
                          </p>
                        </div>
                      </div>
                      <div className="flex mb-4 text-yellow-400">
                        {Array.from({ length: 5 }).map((_, i) => {
                          const isFullStar = i < Math.floor(testimonial.rating);
                          const isHalfStar =
                            i === Math.floor(testimonial.rating) &&
                            testimonial.rating % 1 !== 0;

                          return (
                            <div key={i} className="relative">
                              <Star
                                className={`w-4 h-4 ${
                                  isFullStar || isHalfStar
                                    ? "text-yellow-400"
                                    : "text-gray-600"
                                }`}
                                fill={isFullStar ? "currentColor" : "none"}
                              />
                              {isHalfStar && (
                                <div className="absolute inset-0 overflow-hidden w-1/2">
                                  <Star
                                    className="w-4 h-4 text-yellow-400"
                                    fill="currentColor"
                                  />
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                      <p className="text-gray-300 italic line-clamp-4">
                        {testimonial.content}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-slate-600 -left-10" />
              <CarouselNext className="border-slate-600 -right-10" />
            </Carousel>
          </div>

          {/* Mobile Grid (below md screens) */}
          <div className="md:hidden grid grid-cols-1 gap-6">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-blue-900/20 group">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={testimonial.image || "https://via.placeholder.com/150"}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-400"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/150";
                    }}
                  />
                  <div>
                    <h3 className="text-white font-bold">{testimonial.name}</h3>
                    <p className="text-[#E0FCFD] text-sm">VSA Nâng cao - K1</p>
                  </div>
                </div>
                <div className="flex mb-4 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => {
                    const isFullStar = i < Math.floor(testimonial.rating);
                    const isHalfStar =
                      i === Math.floor(testimonial.rating) &&
                      testimonial.rating % 1 !== 0;

                    return (
                      <div key={i} className="relative">
                        <Star
                          className={`w-4 h-4 ${
                            isFullStar || isHalfStar
                              ? "text-yellow-400"
                              : "text-gray-600"
                          }`}
                          fill={isFullStar ? "currentColor" : "none"}
                        />
                        {isHalfStar && (
                          <div className="absolute inset-0 overflow-hidden w-1/2">
                            <Star
                              className="w-4 h-4 text-yellow-400"
                              fill="currentColor"
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <p className="text-gray-300 italic">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content 5 */}
      <div className="py-20 bg-gradient-to-t from-[#394F89] to-[#0F1423]">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-[#394F89] text-white font-bold text-base mb-6">
              <span>
                {curriculum.reduce(
                  (total, chapter) => total + chapter.sessions.length,
                  0
                )}{" "}
                BÀI HỌC CHUYÊN SÂU
              </span>
            </div>
            <h2 className="text-[36px] font-semibold text-white mb-4">
              Chương Trình Học VSA Nâng Cao
            </h2>
            <p className="text-gray-400 text-lg mx-auto">
              Chương trình được thiết kế chuyên sâu giúp học viên nắm vững kỹ
              năng phân tích và giao dịch thực chiến
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {curriculum.map((chapter, chapterIndex) => (
              <div key={`chapter-${chapterIndex}`}>
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="sm:w-16 sm:h-16 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-[#394F89] flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-blue-500/20">
                        {chapterIndex === 0 && (
                          <Atom className="sm:w-8 sm:h-8 w-6 h-6" />
                        )}
                        {chapterIndex === 1 && (
                          <Target className="sm:w-8 sm:h-8 w-6 h-6" />
                        )}
                        {chapterIndex === 2 && (
                          <Zap className="sm:w-8 sm:h-8 w-6 h-6" />
                        )}
                      </div>
                      <div>
                        <h3 className="sm:text-2xl md:text-3xl text-xl font-bold text-white">
                          {chapter.chapter}
                        </h3>
                        <p className="text-blue-400 sm:text-lg text-sm">
                          {chapter.title}
                        </p>
                      </div>
                    </div>
                    <div className="md:ml-auto flex items-center bg-blue-900/30 px-4 py-2 rounded-full text-blue-300 text-sm">
                      <span className="font-semibold">
                        {chapter.sessions.length} bài học
                      </span>
                    </div>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-blue-600 to-[#394F89] rounded-full w-full mb-8"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {chapter.sessions.map((session, sessionIndex) => (
                    <div
                      key={`${chapter.chapter}-${session.session}`}
                      className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-900/30 hover:-translate-y-1 transition-all duration-300 group h-full border border-slate-700/50">
                      {/* Header */}
                      <div className="bg-gradient-to-r from-blue-600 to-[#394F89] p-4 relative">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                            {sessionIndex + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-white font-bold">
                              {session.session}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-grow">
                        <h4 className="text-lg font-bold text-white mb-4">
                          {session.title}
                        </h4>
                        <ul className="space-y-2">
                          {session.topics.map((topic, topicIndex) => (
                            <li
                              key={topicIndex}
                              className="text-gray-300 flex items-start gap-2 group/item text-sm">
                              <Check className="w-4 h-4 text-green-400 mt-1 flex-shrink-0 group-hover/item:text-green-300" />
                              <span className="group-hover/item:text-white transition-colors">
                                {topic}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content 6 */}
      <div className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[33px] sm:text-[36px] font-extrabold leading-[40px] tracking-[-2.5%] text-[#111827] mb-4">
              Đầu Tư Cho Tương Lai
            </h2>
            <p className="text-[#6B7280] font-light leading-7 text-base sm:text-lg">
              Giá trị kiến thức vượt trội so với chi phí đầu tư
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-[#394F89] to-[#0F1423] rounded-3xl p-8 shadow-2xl border border-blue-500/20 relative overflow-hidden">
              <div className="absolute top-2 right-2 rounded-full bg-gradient-to-l from-yellow-400 to-orange-500 text-black px-6 py-2 text-sm font-bold">
                🎁 ƯU ĐÃI ĐẶC BIỆT
              </div>

              <div className="text-center mb-8 mt-4">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Khóa Học VSA NÂNG CAO
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-blue-400">
                    4.990.000
                  </span>
                  <span className="text-2xl text-gray-400"> VNĐ</span>
                </div>

                <div className="space-y-3 mb-8 text-left">
                  {[
                    "8 buổi học chuyên sâu với chuyên gia",
                    "Tài liệu học tập độc quyền",
                    "Group hỗ trợ học viên 24/7",
                    "Thực hành trên dữ liệu thực tế",
                    "Hỗ trợ học viên sau khóa: giải đáp về kiến thức VSA, hỗ trợ đánh giá đồ thị, xu hướng cổ phiếu, định hướng giao dịch các mã trong phiên theo kiến thức trong khóa",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() =>
                    router.push("/course-live/TrungTranVSA_Online")
                  }
                  className="w-full bg-gradient-to-r from-blue-600 to-[#394F89] hover:from-blue-700 hover:to-[#394F89] text-white py-4 rounded-2xl font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
                  ĐĂNG KÝ NGAY
                </button>

                <p className="text-gray-400 text-sm mt-4">
                  💳 Hỗ trợ thanh toán linh hoạt
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content 7 - Enhanced Footer Section */}
      <footer className="bg-gradient-to-b from-[#394F89] to-[#0F1423] text-white py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* About FireAnt Education */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Về FireAnt Education</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                FireAnt Education cung cấp các khóa học đầu tư chất lượng cao từ
                các chuyên gia hàng đầu trong ngành tài chính, giúp người học
                nắm vững kiến thức và kỹ năng đầu tư chuyên nghiệp.
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.facebook.com/fireant.vn"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 transition-colors" />
                </a>
                <a
                  href="https://www.youtube.com/c/FireAntTV"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Youtube className="h-5 w-5 text-gray-400 hover:text-red-500 transition-colors" />
                </a>
                <a
                  href="https://marketplace.fireant.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Courses */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Khóa học</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/course-marketing/vsa-landing"
                    className="text-gray-400 hover:text-blue-400 transition-colors">
                    Khóa Học VSA Cơ Bản
                  </Link>
                </li>
                <li>
                  <Link
                    href="/course-marketing/ptkt"
                    className="text-gray-400 hover:text-blue-400 transition-colors">
                    Phân Tích Kỹ Thuật
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Hỗ trợ</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://corporate.fireant.vn/"
                    className="text-gray-400 hover:text-blue-400 transition-colors">
                    Về chúng tôi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dieu-khoan-chinh-sach"
                    className="text-gray-400 hover:text-blue-400 transition-colors">
                    Điều khoản chính sách
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Liên hệ</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-gray-400 mt-0.5" />
                  <a
                    href="mailto:contact@fireant.vn"
                    className="text-gray-400 hover:text-blue-400 transition-colors">
                    contact@fireant.vn
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div className="text-gray-400">
                    <a
                      href="tel:+842432252120"
                      className="hover:text-blue-400 transition-colors">
                      024.3225.2120
                    </a>{" "}
                    |{" "}
                    <a
                      href="tel:+841900633543"
                      className="hover:text-blue-400 transition-colors">
                      1900.633.543
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="h-8 w-8 text-gray-400 mt-0.5" />
                  <span className="text-gray-400">
                    Tầng 6 Tòa nhà ADG, 37 Lê Văn Thiêm, Thanh Xuân, Hà Nội
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#394F89]/50 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} FireAnt Education. Đã đăng ký bản
              quyền.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
                Điều khoản
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
                Bảo mật
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default Home;
