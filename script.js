const sampleData = {
  recipient: "한국대학교사회봉사협의회",
  docDate: "2024-06-05",
  via: "",
  subject: "제46기 월드프렌즈코리아(WFK) 청년봉사단 라오스팀 활동기관 변경 건",
  intro: "귀 기관의 무한한 발전을 기원합니다.",
  body2:
    "밀크포라오는 라오스 아동의 건강한 영양 섭취를 위한 영양 개선 프로그램과 기초 낙농 산업 발전을 위한 다양한 서비스를 제공하기 위해 설립된 서울시, 라오스 농림부 산하 민간단체입니다.",
  body3:
    "본 민간단체는 ‘제46기 월드프렌즈코리아(WFK) 청년봉사단 프로그램’의 진행과 관련하여 봉사활동 기관의 변경사항에 대한 양해를 부탁드립니다.",
  oldOrg: "라오스 비엔티안 농맘끼아 초등학교",
  newOrg: "라오스 비엔티안 팍산마이 초등학교",
  reason:
    "최근 팍산마이 초등학교에 대한 봉사단 파견 횟수가 감소하여, 라오스 교육부에서 봉사단 파견 및 교육에 대한 수요를 제기하였음. 이에 따라, 요청 및 수요를 반영하여 활동 기관을 변경하게 됨.",
  orgName: "밀크포라오",
  ceo: "이재원",
  docNo: "대외협력팀 2024-008",
  manager: "이재원 대표",
  email: "milkforlao@gmail.com",
  phone: "010-6801-6844",
  address: "서울시 동작구 흑용로 38(상도동 B1 7-21호)",
};

const fieldIds = Object.keys(sampleData);

const read = (id) => document.getElementById(id)?.value?.trim() ?? "";

function formatDate(value) {
  if (!value) return "";
  const [y, m, d] = value.split("-");
  return `${y}.${m}.${d}`;
}

function setFormValues(values) {
  for (const id of fieldIds) {
    const el = document.getElementById(id);
    if (!el) continue;
    el.value = values[id] ?? "";
  }
  render();
}

function clearForm() {
  const empty = {};
  for (const id of fieldIds) empty[id] = "";
  setFormValues(empty);
}

function render() {
  for (const id of fieldIds) {
    const value = id === "docDate" ? formatDate(read(id)) : read(id);
    document.querySelectorAll(`[data-bind="${id}"]`).forEach((el) => {
      el.textContent = value;
    });
  }

  const email = read("email");
  const mailLink = document.getElementById("mailLink");
  mailLink.textContent = email;
  mailLink.href = email ? `mailto:${email}` : "#";
}

fieldIds.forEach((id) => {
  const el = document.getElementById(id);
  el?.addEventListener("input", render);
});

document.getElementById("fillSampleBtn")?.addEventListener("click", () => {
  setFormValues(sampleData);
});

document.getElementById("clearBtn")?.addEventListener("click", clearForm);

document.getElementById("printBtn")?.addEventListener("click", () => {
  window.print();
});

render();
