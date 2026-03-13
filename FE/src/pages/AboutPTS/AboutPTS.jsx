import { motion } from "framer-motion";
import {
  Info,
  BookOpen,
  ClipboardList,
  UserCheck,
  CheckCircle,
  FileText,
  Users,
  BarChart3,
  ArrowRight,
  Star,
  AlertCircle,
  Eye,
  MessageSquare,
  UserPlus,
  Settings,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

/* ------------------------------------------------------------------
   Shared animation variants
------------------------------------------------------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45 },
  }),
};

/* ------------------------------------------------------------------
   Role-specific content definitions
------------------------------------------------------------------ */
const roleContent = {
  Student: {
    color: "from-indigo-600 to-purple-600",
    lightBg: "bg-indigo-50",
    border: "border-indigo-200",
    badge: "bg-indigo-100 text-indigo-700",
    icon: <BookOpen size={22} />,
    title: "Your Duties as a Student",
    description:
      "As a practicum student, you are responsible for recording your daily activities and attending your scheduled sessions.",
    steps: [
      {
        icon: <ClipboardList size={18} />,
        title: "Submit Log Papers",
        detail:
          "After each practicum session, fill in a log paper with the date, activity type, description, and total hours spent.",
      },
      {
        icon: <UserCheck size={18} />,
        title: "Mark Attendance",
        detail:
          "Record your attendance for each practicum day so your mentor can track your presence and progress.",
      },
      {
        icon: <AlertCircle size={18} />,
        title: "Monitor Log Status",
        detail:
          "Keep an eye on your submitted logs. They move through Pending → Verified → Reviewed stages as mentors and tutors check them.",
      },
      {
        icon: <Star size={18} />,
        title: "What Happens Next",
        detail:
          "Your mentor will verify your logs and leave feedback. The tutor then reviews and approves them. Approved logs count towards your practicum completion.",
      },
    ],
  },
  Mentor: {
    color: "from-emerald-600 to-teal-600",
    lightBg: "bg-emerald-50",
    border: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
    icon: <Users size={22} />,
    title: "Your Role as a Mentor",
    description:
      "Mentors guide and supervise students during their practicum, verifying their logs and tracking attendance.",
    steps: [
      {
        icon: <Eye size={18} />,
        title: "Review Student Logs",
        detail:
          "Navigate to Log Reports to see all pending log papers from your assigned students. Read through each entry carefully.",
      },
      {
        icon: <CheckCircle size={18} />,
        title: "Verify or Give Feedback",
        detail:
          "Approve correct logs by marking them Verified. If an entry needs correction, add feedback so the student can improve.",
      },
      {
        icon: <ClipboardList size={18} />,
        title: "Track Attendance",
        detail:
          "Use the Attendance section to view and manage your students' attendance records throughout the practicum period.",
      },
      {
        icon: <ArrowRight size={18} />,
        title: "What Happens After Verification",
        detail:
          "Once you verify a log, it moves to the tutor's queue for final review. Consistently verified records help the tutor approve the student's practicum completion.",
      },
    ],
  },
  Tutor: {
    color: "from-orange-500 to-rose-500",
    lightBg: "bg-orange-50",
    border: "border-orange-200",
    badge: "bg-orange-100 text-orange-700",
    icon: <Settings size={22} />,
    title: "Your Tasks as a Tutor",
    description:
      "Tutors oversee the entire practicum programme — managing users, reviewing mentor-verified logs, and monitoring overall progress.",
    steps: [
      {
        icon: <UserPlus size={18} />,
        title: "Manage Users",
        detail:
          "Create and manage student, mentor, and tutor accounts from the Users section. Assign students to their respective mentors.",
      },
      {
        icon: <FileText size={18} />,
        title: "Review Verified Logs",
        detail:
          "After mentors verify student logs, you perform the final review. You can add tutor feedback and mark logs as fully approved.",
      },
      {
        icon: <MessageSquare size={18} />,
        title: "Provide Feedback",
        detail:
          "Leave tutor-level feedback on any log. Your observations are recorded alongside the mentor's notes for a complete assessment.",
      },
      {
        icon: <BarChart3 size={18} />,
        title: "Monitor Dashboards",
        detail:
          "Use the Dashboards section to view analytics: total logs, hours, verification rates, and per-student progress charts.",
      },
    ],
  },
};

/* ------------------------------------------------------------------
   How-it-works workflow steps (shared for all roles)
------------------------------------------------------------------ */
const workflowSteps = [
  {
    step: 1,
    title: "Student Logs Activity",
    detail: "The student records each practicum session by submitting a log paper with activity details and hours.",
    color: "bg-indigo-500",
  },
  {
    step: 2,
    title: "Mentor Verifies",
    detail: "The assigned mentor reviews the log, provides feedback if needed, and marks it Verified.",
    color: "bg-emerald-500",
  },
  {
    step: 3,
    title: "Tutor Reviews",
    detail: "The tutor performs a final review, adds overall feedback, and approves the log for practicum credit.",
    color: "bg-orange-500",
  },
  {
    step: 4,
    title: "Progress Tracked",
    detail: "Approved logs accumulate toward the student's practicum completion, visible in dashboard analytics.",
    color: "bg-purple-500",
  },
];

/* ------------------------------------------------------------------
   Component
------------------------------------------------------------------ */
export default function AboutPTS() {
  const { user } = useAuth();
  const role = user?.role || "Student";
  const rc = roleContent[role] || roleContent.Student;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 md:p-10 overflow-y-auto max-w-4xl mx-auto w-full">

          {/* ── Hero Banner ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className={`bg-gradient-to-r ${rc.color} rounded-2xl p-6 mb-8 text-white shadow-lg`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-white/20 rounded-xl">
                <Info size={24} />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold">About PTS</h1>
            </div>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              The <strong>EIT Practicum Tracking System (PTS)</strong> is a digital platform designed to
              simplify the management of practicum activities for students, mentors, and tutors at EIT.
              It replaces paper-based records with a streamlined, role-aware workflow.
            </p>
          </motion.div>

          {/* ── What is PTS ── */}
          <motion.section
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <BookOpen size={20} className="text-indigo-600" />
              <h2 className="text-lg font-bold text-gray-800">What is PTS?</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              PTS is a web-based practicum tracking system that connects students, mentors, and tutors
              in a single platform. It provides role-specific dashboards, log management, attendance
              tracking, and real-time analytics to ensure every practicum session is accurately recorded
              and assessed.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: "Students", desc: "Submit logs & attendance", color: "bg-indigo-100 text-indigo-700" },
                { label: "Mentors", desc: "Verify logs & guide students", color: "bg-emerald-100 text-emerald-700" },
                { label: "Tutors", desc: "Manage users & final review", color: "bg-orange-100 text-orange-700" },
              ].map((r) => (
                <li key={r.label} className={`rounded-xl p-3 ${r.color} text-sm`}>
                  <p className="font-semibold">{r.label}</p>
                  <p className="opacity-80 text-xs mt-0.5">{r.desc}</p>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* ── How It Works ── */}
          <motion.section
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <ArrowRight size={20} className="text-indigo-600" />
              <h2 className="text-lg font-bold text-gray-800">How It Works</h2>
            </div>
            <div className="flex flex-col gap-3">
              {workflowSteps.map((ws, idx) => (
                <div key={ws.step} className="flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-full ${ws.color} text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5`}>
                    {ws.step}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800">{ws.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{ws.detail}</p>
                  </div>
                  {idx < workflowSteps.length - 1 && (
                    <div className="hidden sm:block w-px h-full" />
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* ── Role-specific Section ── */}
          <motion.section
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="visible"
            className={`bg-white rounded-2xl shadow-sm border ${rc.border} p-6 mb-6`}
          >
            <div className="flex items-center gap-2 mb-1">
              <div className={`p-1.5 rounded-lg ${rc.lightBg}`}>
                <span className={rc.badge.split(" ")[1]}>{rc.icon}</span>
              </div>
              <h2 className="text-lg font-bold text-gray-800">{rc.title}</h2>
              <span className={`ml-auto text-xs font-medium px-2.5 py-1 rounded-full ${rc.badge}`}>
                {role}
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-4 mt-1">{rc.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {rc.steps.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={4 + i}
                  initial="hidden"
                  animate="visible"
                  className={`rounded-xl p-4 ${rc.lightBg} border ${rc.border}`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={rc.badge.split(" ")[1]}>{s.icon}</span>
                    <p className="text-sm font-semibold text-gray-800">{s.title}</p>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ── Footer note ── */}
          <motion.p
            variants={fadeUp}
            custom={8}
            initial="hidden"
            animate="visible"
            className="text-center text-xs text-gray-400 pb-4"
          >
            EIT Practicum Tracking System &copy; 2025 — Built to make practicum management easier for everyone.
          </motion.p>
        </main>
      </div>
    </div>
  );
}
