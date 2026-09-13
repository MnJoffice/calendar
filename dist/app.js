const YEAR = 2026;
const monthNames = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];
const weekdays = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];
const seasons = [
  {label:'WINTER IN JEJU',title:'동백과 눈꽃의 겨울',desc:'차가운 바람 속에서 동백이 깊은 색으로 피어요.',emoji:'❄️'},
  {label:'WINTER IN JEJU',title:'봄을 기다리는 섬',desc:'매화와 유채가 조금씩 봄 소식을 전해요.',emoji:'❄️'},
  {label:'SPRING IN JEJU',title:'봄빛이 가장 먼저 닿는 섬',desc:'유채꽃과 왕벚꽃이 이어 피는 시기예요.',emoji:'🌸'},
  {label:'SPRING IN JEJU',title:'꽃길이 이어지는 제주',desc:'겹벚꽃과 청보리의 싱그러움이 가득해요.',emoji:'🌸'},
  {label:'SPRING IN JEJU',title:'초록이 짙어지는 계절',desc:'장미와 감귤꽃 향기가 바람을 채워요.',emoji:'🌿'},
  {label:'SUMMER IN JEJU',title:'수국으로 물드는 돌담길',desc:'비 온 뒤 선명해진 수국을 만나보세요.',emoji:'🌿'},
  {label:'SUMMER IN JEJU',title:'바다와 여름꽃의 시간',desc:'능소화와 연꽃이 한여름 풍경을 만들어요.',emoji:'🌿'},
  {label:'SUMMER IN JEJU',title:'짙푸른 여름의 절정',desc:'해안 산책은 이른 아침과 해질녘이 좋아요.',emoji:'🌿'},
  {label:'AUTUMN IN JEJU',title:'바람이 억새를 깨우는 달',desc:'오름과 들판이 은빛으로 변하기 시작해요.',emoji:'🍂'},
  {label:'AUTUMN IN JEJU',title:'축제와 억새가 만나는 가을',desc:'제주의 문화와 풍경을 함께 즐겨보세요.',emoji:'🍂'},
  {label:'AUTUMN IN JEJU',title:'걷기 좋은 늦가을',desc:'오름과 올레길의 차분한 색을 만나요.',emoji:'🍂'},
  {label:'WINTER IN JEJU',title:'동백이 여는 제주의 겨울',desc:'붉은 동백과 따뜻한 차 한 잔이 어울려요.',emoji:'❄️'}
];
const blooms = {
  0:[['동백','11월–2월','카멜리아힐 · 남원'],['수선화','12월–3월','한림공원 · 노리매'],['알로에꽃','1월','김녕 일대']],
  1:[['매화','2월–3월','걸매생태공원 · 휴애리'],['유채꽃','1월–4월','산방산 · 성산'],['동백','11월–2월','위미리 · 삼달리']],
  2:[['유채꽃','1월–4월','녹산로 · 가시리'],['왕벚꽃','3월 말–4월 초','전농로 · 장전리'],['매화','2월–3월','걸매생태공원']],
  3:[['겹벚꽃','4월','상효원'],['청보리','4월–5월','가파도 · 애월'],['튤립','3월–5월','한림공원 · 상효원']],
  4:[['감귤꽃','5월','하효마을'],['장미','5월–6월','북촌 · 조수리'],['샤스타데이지','5월–6월','돌문화공원']],
  5:[['수국','6월–7월','혼인지 · 안덕'],['메밀꽃','5월–6월','와흘 · 오라동'],['루피너스','5월–6월','마노르블랑']],
  6:[['능소화','7월–8월','비체올린'],['연꽃','7월–8월','선흘반못'],['수국','6월–7월','남국사 · 에코랜드']],
  7:[['배롱나무','7월–9월','제주 전역'],['문주란','7월–9월','토끼섬 일대'],['연꽃','7월–8월','선흘반못']],
  8:[['억새','9월–11월','새별오름 · 산굼부리'],['메밀꽃','9월–10월','와흘메밀마을'],['코스모스','9월–10월','제주 들녘']],
  9:[['억새','9월–11월','산굼부리 · 따라비오름'],['핑크뮬리','9월–11월','휴애리 일대'],['메밀꽃','9월–10월','와흘 · 오라동']],
  10:[['억새','9월–11월','새별오름'],['동백','11월–2월','남원 · 위미리'],['감귤','11월–1월','서귀포 일대']],
  11:[['동백','11월–2월','카멜리아힐 · 위미리'],['수선화','12월–3월','한림공원'],['감귤','11월–1월','서귀포 일대']]
};
const events = [
  {start:'2026-01-01',end:'2026-01-01',title:'성산일출축제 · 새해맞이',place:'성산일출봉 일대'},
  {start:'2026-01-01',end:'2026-01-01',title:'서귀포 겨울바다 국제펭귄수영대회',place:'중문색달해수욕장'},
  {start:'2026-01-02',end:'2026-01-31',title:'겨울 알로에 꽃 축제',place:'김정문알로에 농장'},
  {start:'2025-12-13',end:'2026-03-02',title:'한라산 눈꽃버스',place:'한라산 1100도로'},
  {start:'2026-03-20',end:'2026-04-12',title:'제주 봄꽃 여행 주간',place:'전농로 · 녹산로 · 가시리',guide:true},
  {start:'2026-04-04',end:'2026-04-26',title:'가파도 청보리 여행 시기',place:'가파도',guide:true},
  {start:'2026-06-06',end:'2026-07-12',title:'제주 수국 여행 시기',place:'혼인지 · 안덕 · 남국사',guide:true},
  {start:'2026-09-23',end:'2026-10-11',title:'신산 도채비 빛 축제',place:'신산공원 일대'},
  {start:'2026-10-03',end:'2026-10-18',title:'세계유산축전',place:'제주 화산섬과 용암동굴'},
  {start:'2026-10-17',end:'2026-10-21',title:'제65회 탐라문화제',place:'제주시 시민복지타운'},
  {start:'2026-10-23',end:'2026-10-25',title:'제32회 서귀포칠십리축제',place:'천지연 주차장 일대'},
  {start:'2026-10-24',end:'2026-10-24',title:'제주마축제',place:'제주 일대'},
  {start:'2026-11-05',end:'2026-11-07',title:'2026 제주올레걷기축제',place:'제주올레길'}
];
let selected = new Date(YEAR,2,18);
let month = 2;
let todos = JSON.parse(localStorage.getItem('jeju-2026-todos') || '{}');
const $ = s => document.querySelector(s);
const dateKey = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const eventsFor = key => events.filter(e => key >= e.start && key <= e.end);

function renderMonthNav(){
  $('#monthNav').innerHTML = monthNames.map((_,i)=>`<button class="month-button ${i===month?'active':''}" data-month="${i}" aria-current="${i===month?'date':'false'}">${i+1}월</button>`).join('');
}
function renderHeader(){
  const s=seasons[month];
  $('#monthNumber').textContent=month+1; $('#monthEnglish').textContent=monthNames[month];
  $('#seasonLabel').textContent=s.label; $('#seasonTitle').textContent=s.title; $('#seasonDescription').textContent=s.desc;
  $('#seasonEmoji').textContent=s.emoji; $('.season-index').textContent=String(month+1).padStart(2,'0');
}
function renderCalendar(){
  const first=new Date(YEAR,month,1), start=new Date(YEAR,month,1-first.getDay());
  const today=new Date(); const realToday=dateKey(today);
  let html='';
  for(let i=0;i<42;i++){
    const d=new Date(start); d.setDate(start.getDate()+i); const key=dateKey(d); const dayEvents=eventsFor(key); const dayTodos=todos[key]||[];
    html+=`<button class="day-cell ${d.getMonth()!==month?'outside':''} ${d.getDay()===0?'sunday':''} ${key===dateKey(selected)?'selected':''} ${key===realToday?'today':''}" data-date="${key}" role="gridcell" aria-label="${d.getMonth()+1}월 ${d.getDate()}일">
      <span class="day-number">${d.getDate()}</span>
      ${dayEvents[0]?`<div class="event-chip">${dayEvents[0].title}</div>`:''}
      ${dayTodos.length?`<div class="todo-mark">할 일 ${dayTodos.filter(t=>!t.done).length}개</div>`:''}
    </button>`;
  }
  $('#calendarGrid').innerHTML=html;
}
function renderBlooms(){
  $('#bloomList').innerHTML=blooms[month].map(([name,period,place])=>`<article class="bloom-item"><b>${name}</b><span class="period">${period}</span><span>${place}</span></article>`).join('');
}
function renderDay(){
  const key=dateKey(selected), list=eventsFor(key), dateTodos=todos[key]||[];
  $('#selectedFullDate').textContent=`${YEAR}년 ${selected.getMonth()+1}월 ${selected.getDate()}일`;
  $('#selectedDay').textContent=selected.getDate(); $('#selectedWeekday').textContent=weekdays[selected.getDay()];
  $('#eventCount').textContent=`${list.length}개`;
  $('#eventList').innerHTML=list.length?list.map(e=>`<article class="event-card"><b>${e.title}</b><span>${e.place}${e.guide?' · 추천 시기':''}</span></article>`).join(''):'<div class="event-empty">등록된 제주 일정이 없습니다.</div>';
  const done=dateTodos.filter(t=>t.done).length; $('#todoProgress').textContent=`${done} / ${dateTodos.length}`;
  $('#todoList').innerHTML=dateTodos.map((t,i)=>`<li class="todo-item ${t.done?'done':''}"><input type="checkbox" data-index="${i}" ${t.done?'checked':''} aria-label="${t.text} 완료"><label>${escapeHtml(t.text)}</label><button class="delete-todo" data-delete="${i}" aria-label="${t.text} 삭제">×</button></li>`).join('');
  $('#todoEmpty').hidden=dateTodos.length>0;
}
function escapeHtml(v){const d=document.createElement('div');d.textContent=v;return d.innerHTML}
function render(){renderMonthNav();renderHeader();renderCalendar();renderBlooms();renderDay()}
function save(){localStorage.setItem('jeju-2026-todos',JSON.stringify(todos));renderCalendar();renderDay()}
function showToast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(showToast.t);showToast.t=setTimeout(()=>el.classList.remove('show'),1600)}

$('#monthNav').addEventListener('click',e=>{const b=e.target.closest('[data-month]');if(!b)return;month=+b.dataset.month;selected=new Date(YEAR,month,1);render()});
$('#calendarGrid').addEventListener('click',e=>{const b=e.target.closest('[data-date]');if(!b)return;const [y,m,d]=b.dataset.date.split('-').map(Number);selected=new Date(y,m-1,d);month=m-1;render()});
$('#prevMonth').addEventListener('click',()=>{month=(month+11)%12;selected=new Date(YEAR,month,1);render()});
$('#nextMonth').addEventListener('click',()=>{month=(month+1)%12;selected=new Date(YEAR,month,1);render()});
$('#todayBtn').addEventListener('click',()=>{const now=new Date();selected=now.getFullYear()===YEAR?now:new Date(YEAR,0,1);month=selected.getMonth();render();showToast(now.getFullYear()===YEAR?'오늘로 이동했어요':'2026년 1월 1일로 이동했어요')});
$('#todoForm').addEventListener('submit',e=>{e.preventDefault();const input=$('#todoInput'),text=input.value.trim();if(!text)return;const key=dateKey(selected);todos[key]=todos[key]||[];todos[key].push({text,done:false});input.value='';save();showToast('할 일을 추가했어요')});
$('#todoList').addEventListener('change',e=>{if(!e.target.matches('[data-index]'))return;const key=dateKey(selected);todos[key][+e.target.dataset.index].done=e.target.checked;save()});
$('#todoList').addEventListener('click',e=>{const b=e.target.closest('[data-delete]');if(!b)return;const key=dateKey(selected);todos[key].splice(+b.dataset.delete,1);if(!todos[key].length)delete todos[key];save();showToast('할 일을 삭제했어요')});

function registerWebMcp(){
  const context=document.modelContext;
  if(!context?.registerTool)return;
  const register=tool=>Promise.resolve(context.registerTool(tool)).catch(()=>{});
  register({name:'list_calendar_day',title:'날짜 일정 보기',description:'2026년의 지정한 날짜에 저장된 할 일과 제주 일정을 조회합니다.',inputSchema:{type:'object',properties:{date:{type:'string',pattern:'^2026-[0-9]{2}-[0-9]{2}$'}},required:['date'],additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:true},execute:({date})=>({date,events:eventsFor(date),todos:todos[date]||[]})});
  register({name:'add_calendar_todo',title:'할 일 추가',description:'2026년의 지정한 날짜에 새 할 일을 추가하고 달력 화면을 갱신합니다.',inputSchema:{type:'object',properties:{date:{type:'string',pattern:'^2026-[0-9]{2}-[0-9]{2}$'},text:{type:'string',minLength:1,maxLength:60}},required:['date','text'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:true},execute:({date,text})=>{const d=new Date(`${date}T00:00:00`);if(Number.isNaN(d.getTime())||dateKey(d)!==date)throw new Error('유효한 2026년 날짜가 아닙니다.');const clean=String(text).trim();if(!clean||clean.length>60)throw new Error('할 일은 1–60자로 입력하세요.');todos[date]=todos[date]||[];todos[date].push({text:clean,done:false});selected=d;month=d.getMonth();save();render();return{date,text:clean,added:true}}});
}
registerWebMcp();
render();
