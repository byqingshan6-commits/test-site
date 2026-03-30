import React from 'react';
import { MapPin, Utensils, Camera, AlertTriangle, Flame, Info, Train, Building, Map as MapIcon, CheckCircle2, Navigation, ShoppingBag, Coffee, BedDouble, Banknote, TreePine } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-stone-800 font-sans selection:bg-orange-200">
      {/* Hero */}
      <header className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-16 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-4 border border-white/30">
            3天2夜 · 深度休闲游
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            淄博逛吃全攻略
          </h1>
          <p className="text-lg md:text-xl text-orange-50 max-w-2xl opacity-90">
            不赶行程、适合拍照。从艺术琉璃、山野红叶到人间烟火，带你吃透、玩透淄博。
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute -right-10 -bottom-10 opacity-10">
          <Flame size={200} />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12 space-y-12">
        
        {/* Accommodation & Location */}
        <section className="grid md:grid-cols-1 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Building size={24} />
              </div>
              <h2 className="text-xl font-bold">住宿推荐（大本营：张店区）</h2>
            </div>
            <p className="font-medium text-stone-900 mb-2">📍 强烈建议住在：张店区（淄博市区）</p>
            <p className="text-sm text-stone-500 mb-4">核心景点（琉璃馆、海岱楼、八大局）都在张店区，打车基本15分钟内都能搞定。晚上下楼就能吃到正宗烧烤。以下推荐均要求<strong className="text-orange-600">双人床</strong>房型：</p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Hotel 1 */}
              <div className="bg-stone-50 p-5 rounded-xl border border-stone-200 hover:border-blue-200 transition-colors">
                <h3 className="font-bold text-lg text-stone-800 mb-3">淄博万象汇亚朵酒店</h3>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li className="flex items-start gap-2">
                    <MapPin size={16} className="text-blue-500 mt-0.5 shrink-0"/> 
                    <span><strong>位置：</strong>张店区万象汇商圈（市中心，逛吃极度便利）</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BedDouble size={16} className="text-blue-500 shrink-0"/> 
                    <span><strong>房型：</strong>高级双人床房 / 大床房</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Banknote size={16} className="text-blue-500 shrink-0"/> 
                    <span><strong>价格：</strong>约 ¥350 - ¥450 / 晚</span>
                  </li>
                </ul>
              </div>

              {/* Hotel 2 */}
              <div className="bg-stone-50 p-5 rounded-xl border border-stone-200 hover:border-blue-200 transition-colors">
                <h3 className="font-bold text-lg text-stone-800 mb-3">桔子酒店（淄博齐盛湖店）</h3>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li className="flex items-start gap-2">
                    <MapPin size={16} className="text-blue-500 mt-0.5 shrink-0"/> 
                    <span><strong>位置：</strong>张店区齐盛湖附近（离海岱楼、琉璃馆非常近）</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BedDouble size={16} className="text-blue-500 shrink-0"/> 
                    <span><strong>房型：</strong>双人床房 / 商务双床房</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Banknote size={16} className="text-blue-500 shrink-0"/> 
                    <span><strong>价格：</strong>约 ¥300 - ¥400 / 晚</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Navigation className="text-orange-500" />
            详细行程表 (3天2夜)
          </h2>

          <div className="space-y-10">
            {/* Day 1 */}
            <div>
              <div className="sticky top-0 z-20 bg-[#faf9f6]/90 backdrop-blur-md py-3 mb-6">
                <h3 className="text-xl font-bold text-orange-600 flex items-center gap-2">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-lg text-sm">Day 1</span>
                  市区打卡与灵魂烧烤
                </h3>
              </div>
              <div className="ml-4 md:ml-6">
                <TimelineItem 
                  time="10:30-13:00"
                  title="抵达与寻味"
                  desc="到达淄博站，前往酒店办理入住放行李。午餐去吃正宗博山菜。"
                  tips={<>必点菜：博山炸肉、豆腐箱子、博山酥锅。<br/>📍推荐餐厅：老颜神美食街、聚宾楼（市区有很多分店，老字号）。</>}
                  icon={Train}
                />
                <TimelineItem 
                  time="13:30-16:30"
                  title="中国陶瓷琉璃馆"
                  desc="参观中国最大琉璃馆，极度震撼，了解淄博的陶瓷琉璃文化。"
                  tips="拍照打卡：二层琉璃展厅，寻找镇馆之宝“琉璃白菜”和“孙子兵法”。利用展柜的射灯拍微距，琉璃的光影极其梦幻。"
                  icon={Camera}
                />
                <TimelineItem 
                  time="17:00-20:00"
                  title="淄博烧烤"
                  desc="重头戏！感受“一桌一炉一卷饼”的快乐。"
                  tips="烤肉秘籍：滋滋冒油时夹入小饼，配上小葱和蒜蓉辣酱。不要光吃肉，烤甘蓝、烤蒜瓣也是一绝！"
                  icon={Flame}
                  isLast={true}
                />
              </div>
            </div>

            {/* Day 2 */}
            <div>
              <div className="sticky top-0 z-20 bg-[#faf9f6]/90 backdrop-blur-md py-3 mb-6">
                <h3 className="text-xl font-bold text-orange-600 flex items-center gap-2">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-lg text-sm">Day 2</span>
                  山野吸氧与最美夜景
                </h3>
              </div>
              <div className="ml-4 md:ml-6">
                <TimelineItem 
                  time="08:30-10:00"
                  title="八大局便民市场"
                  desc="去八大局感受人间烟火，吃个地道的碳水早餐。"
                  tips="必吃必买：紫米饼、炒锅饼、肥肠包。只买现做的小吃，不建议买包装好的特产。"
                  icon={Coffee}
                />
                <TimelineItem 
                  time="11:00-16:30"
                  title="红叶柿岩旅游区"
                  desc="打车或包车前往博山区（车程约1小时）。这里有玻璃水滑道、山野风光，非常适合年轻人游玩。"
                  tips="游玩重点：体验高空玻璃漂流，穿梭在山林之间非常解压。建议穿舒适的运动鞋，带好防晒和水。"
                  icon={TreePine}
                />
                <TimelineItem 
                  time="19:00-21:30"
                  title="海岱楼钟书阁"
                  desc="返回张店区市区，晚餐后漫步齐盛湖公园，打卡淄博地标海岱楼。"
                  tips="拍照打卡：晚上亮灯后的海岱楼像现实版的“大唐不夜城”。进入钟书阁内部，利用镜面天花板拍出盗梦空间般的对称构图。"
                  icon={MapPin}
                  isLast={true}
                />
              </div>
            </div>

            {/* Day 3 */}
            <div>
              <div className="sticky top-0 z-20 bg-[#faf9f6]/90 backdrop-blur-md py-3 mb-6">
                <h3 className="text-xl font-bold text-orange-600 flex items-center gap-2">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-lg text-sm">Day 3</span>
                  古城漫游与满载而归
                </h3>
              </div>
              <div className="ml-4 md:ml-6">
                <TimelineItem 
                  time="09:30-14:00"
                  title="周村古商城"
                  desc="打车前往周村古商城（天下第一村），午餐在景区解决。"
                  tips="拍照打卡：旱码头牌坊、大染坊（可以拍挂满染布的庭院）。刚出炉的周村烧饼薄如秋叶，记得抓拍非遗师傅贴烧饼的瞬间。穿新中式或汉服极度出片！"
                  icon={Camera}
                />
                <TimelineItem 
                  time="15:00以后"
                  title="满载而归"
                  desc="返回张店区，拿行李，前往高铁站返程。"
                  tips="可以带几盒正宗的周村烧饼，或者在文创店买几串琉璃手串作为伴手礼。"
                  icon={ShoppingBag}
                  isLast={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* BBQ Guide */}
        <section className="bg-orange-50 rounded-3xl p-6 md:p-8 border border-orange-100">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-orange-800">
            <Utensils className="text-orange-600" />
            烧烤防坑与点单指南
          </h2>
          <div className="space-y-4">
            <p className="text-orange-900 font-medium">不用去挤网上排队几小时的网红大店，淄博烧烤的精髓在“社区楼下”。</p>
            
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-bold text-stone-800 mb-2 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                宝藏小店推荐（当地人推荐）
              </h4>
              <ul className="list-disc list-inside text-stone-600 space-y-1 text-sm">
                <li><strong>犇羴鱻烧烤</strong>（本地人多）</li>
                <li><strong>玉鹏烧烤</strong>（肉质新鲜）</li>
                <li><strong>赵一家烧烤</strong>（小饼绝赞）</li>
              </ul>
              <p className="text-xs text-stone-500 mt-2">如果非要去网红店，推荐去“水晶街”附近，吃完可以直接逛街。</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-bold text-stone-800 mb-2 flex items-center gap-2">
                <Info size={18} className="text-blue-500" />
                点单口诀
              </h4>
              <p className="text-sm text-stone-600 mb-2">
                猪肉串五花肉（烤出油卷饼最香）、带皮五花、烤马步鱼、烤小蒜。
              </p>
              <div className="bg-red-50 text-red-700 text-sm p-2 rounded-md font-medium">
                切记：两人吃先点50串以内，小饼很饱肚子，不够再加！
              </div>
            </div>
          </div>
        </section>

        {/* Tips & Warnings */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <AlertTriangle className="text-red-500" />
            避雷与实用建议
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <TipCard 
              title="琉璃馆预约" 
              desc="琉璃馆是免费的，但必须提前在微信公众号“中国陶瓷琉璃馆”预约（提前1-3天放票），周一闭馆，千万别跑空！"
            />
            <TipCard 
              title="出行交通" 
              desc="淄博市区不大，建议全程滴滴或共享电单车。去八大局千万别开车，根本找不到停车位。"
            />
            <TipCard 
              title="避开排队" 
              desc="吃烧烤请务必在下午4:30 - 5:00之间到达店里。一旦过了5点半，本地人下班+游客涌入，基本都要排队等炉子。"
            />
            <TipCard 
              title="八大局避雷" 
              desc="八大局现在商业化较重，里面的“真空包装周村烧饼”或“非本地产的水果”不要买，去超市买更划算，在八大局只吃现做现烤的热乎小吃。"
            />
            <TipCard 
              title="穿搭建议" 
              desc="琉璃馆内冷气较足，建议带件薄外套；吃烧烤不可避免会有烟熏味，第一天晚上尽量穿易洗的衣服，不要穿昂贵的真丝或不易打理的材质。"
              className="sm:col-span-2"
            />
          </div>
        </section>

        <footer className="text-center py-8 text-stone-500 border-t border-stone-200">
          <p className="font-medium text-stone-700">祝你在淄博吃得扶墙出，拍出爆款朋友圈！🍢📸</p>
          <p className="text-sm mt-2">有什么需要调整的随时告诉我哦。</p>
        </footer>
      </main>
    </div>
  );
}

const TimelineItem = ({ time, title, desc, tips, icon: Icon, isLast = false }: any) => (
  <div className="flex gap-4 relative">
    {!isLast && <div className="absolute left-6 top-10 bottom-0 w-0.5 bg-orange-200/50"></div>}
    <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 z-10 shadow-sm border border-orange-200">
      <Icon size={20} />
    </div>
    <div className="pb-10 pt-1">
      <div className="flex flex-wrap items-baseline gap-3 mb-2">
        <h4 className="text-lg font-bold text-stone-800">{title}</h4>
        <span className="text-xs font-bold text-orange-700 bg-orange-100 px-2.5 py-1 rounded-full tracking-wide">{time}</span>
      </div>
      <p className="text-stone-600 mb-3 leading-relaxed">{desc}</p>
      {tips && (
        <div className="bg-white rounded-xl p-4 text-sm text-stone-700 border border-stone-100 shadow-sm">
          <strong className="text-stone-900 flex items-center gap-1.5 mb-1.5">
            <Camera size={16} className="text-orange-500" />
            游玩重点与拍照指南
          </strong>
          <div className="leading-relaxed text-stone-600">{tips}</div>
        </div>
      )}
    </div>
  </div>
);

const TipCard = ({ title, desc, className = "" }: any) => (
  <div className={`bg-white p-5 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow ${className}`}>
    <h4 className="font-bold text-stone-800 mb-2">{title}</h4>
    <p className="text-sm text-stone-600 leading-relaxed">{desc}</p>
  </div>
);

