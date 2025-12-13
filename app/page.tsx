export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 p-8">
      <main className="max-w-2xl w-full text-center space-y-8">
        {/* 标题部分 */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
            Blender 书房
          </h1>
          <p className="text-xl text-gray-600">
            专为 Blender 学习者打造的个人数字学习空间
          </p>
        </div>

        {/* 状态指示器 */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-gray-700 font-medium">正在建设中</span>
        </div>

        {/* 核心功能预览 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="bg-white/90 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">📝</div>
            <h3 className="font-semibold text-gray-900 mb-2">学习笔记</h3>
            <p className="text-gray-600 text-sm">结构化记录所有 Blender 知识点</p>
          </div>
          <div className="bg-white/90 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-gray-900 mb-2">命令速查</h3>
            <p className="text-gray-600 text-sm">个性化快捷键字典与快速参考</p>
          </div>
          <div className="bg-white/90 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="font-semibold text-gray-900 mb-2">作品集</h3>
            <p className="text-gray-600 text-sm">3D 创作成果展示与过程记录</p>
          </div>
        </div>

        {/* 底部信息 */}
        <div className="pt-12 border-t border-gray-300/50 mt-12">
          <p className="text-gray-500 text-sm">
            基于 Next.js 14 + TypeScript + Tailwind CSS 构建
            <br />
            数据将云端同步至 Cloudflare
          </p>
        </div>
      </main>
    </div>
  );
}