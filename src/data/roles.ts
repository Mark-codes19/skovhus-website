export type RoleEntry = {
  role: string;
  company: string;
  employees?: string;
  gross?: string;
  ror?: string;
  year?: string;
};

export const direktion: RoleEntry[] = [
  { role: "Direktør & Stifter", company: "Skovhus-Økonomisk Rådgivning ApS", employees: "1" },
  { role: "Foreningsrepræsentant", company: "Ejerforeningen Ny Munkegade 71" },
];

export const bestyrelse: RoleEntry[] = [
  { role: "Bestyrelsesformand", company: "K.V. Markussen A/S", employees: "54", gross: "38.787", ror: "11,7 %", year: "2024" },
  { role: "Næstformand", company: "Forstas A/S", employees: "403", gross: "230.047", ror: "3,4 %", year: "2025" },
  { role: "Bestyrelsesmedlem", company: "Vingsted Hotel & Konferencecenter, Erhvervsdrivende Fond", employees: "157", gross: "55.918", ror: "1,5 %", year: "2025" },
  { role: "Bestyrelsesformand", company: "Tønnes & Ulstrup A/S", employees: "41", gross: "18.610", ror: "2,9 %", year: "2024" },
  { role: "Bestyrelsesformand", company: "Jima Hegn A/S", employees: "19", gross: "14.564", ror: "18,8 %", year: "2025" },
  { role: "Bestyrelsesformand", company: "Digital Juice A/S", employees: "6", gross: "2.792", ror: "39 %", year: "2025" },
  { role: "Bestyrelsesformand", company: "Noisecare A/S", employees: "4", gross: "2.166", ror: "2,8 %", year: "2025" },
  { role: "Bestyrelsesformand", company: "Stehr Holding Vejle A/S", employees: "—", gross: "-13", ror: "5,5 %", year: "2024" },
  { role: "Bestyrelsesformand", company: "Dinbilauktion.dk ApS", employees: "16", gross: "28", ror: "97,2 %", year: "2024" },
  { role: "Bestyrelsesformand", company: "Nordic Fencing Supply ApS", employees: "—", gross: "-30", ror: "24,4 %", year: "2025" },
  { role: "Bestyrelsesformand", company: "K.V. Markussen Holding A/S" },
];
