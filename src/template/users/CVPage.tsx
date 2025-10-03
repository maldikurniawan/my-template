import { Button, Card, TextArea, TextField } from "@/components";
import { useMemo, useState } from "react";

export default function SimpleCVGenerator() {
  const [cv, setCv] = useState({
    name: "Nama Lengkap",
    title: "Frontend Developer",
    email: "email@domain.com",
    phone: "081234567890",
    location: "Jakarta, Indonesia",
    summary: "Ringkasan singkat tentang pengalaman dan keahlian Anda.",
    skills: "React, TypeScript, TailwindCSS",
    experiences: [
      { id: 1, company: "PT. Tadika Mesra", role: "Frontend Developer", period: "2023 - Sekarang", desc: "Mengerjakan fitur UI dan integrasi API." },
    ],
    education: [
      { id: 1, school: "Universitas Raftel", degree: "S1 - Teknik Informatika", period: "2018 - 2022" },
    ],
  });

  const update = (field: string, value: any) => {
    setCv((s: any) => ({ ...s, [field]: value }));
  };

  const updateArrayItem = (key: "experiences" | "education", id: number, field: string, value: string) => {
    setCv((s: any) => ({
      ...s,
      [key]: s[key].map((item: any) => (item.id === id ? { ...item, [field]: value } : item)),
    }));
  };

  const addArrayItem = (key: "experiences" | "education") => {
    setCv((s: any) => {
      const newItem = key === "experiences"
        ? { id: Date.now(), company: "Perusahaan Baru", role: "Role", period: "2025", desc: "Deskripsi singkat" }
        : { id: Date.now(), school: "Sekolah Baru", degree: "Gelar", period: "2025" };
      return { ...s, [key]: [...s[key], newItem] };
    });
  };

  const removeArrayItem = (key: "experiences" | "education", id: number) => {
    setCv((s: any) => ({ ...s, [key]: s[key].filter((i: any) => i.id !== id) }));
  };

  const srcDoc = useMemo(() => {
    const skillsHtml = cv.skills.split(",").map((sk: string) => `<li>${sk.trim()}</li>`).join("");
    const expHtml = cv.experiences.map((e: any) => `
      <div class="exp-item">
        <h4>${e.role} — ${e.company}</h4>
        <div class="period">${e.period}</div>
        <p>${e.desc}</p>
      </div>
    `).join("");

    const eduHtml = cv.education.map((e: any) => `
      <div class="edu-item">
        <h4>${e.school}</h4>
        <div class="degree">${e.degree} · ${e.period}</div>
      </div>
    `).join("");

    return `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style>
            body { font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; padding: 24px; color: #0f172a; }
            .container { max-width: 800px; margin: 0 auto; }
            .header { display:flex; align-items:center; justify-content:space-between; border-bottom:2px solid #e6edf3; padding-bottom:12px; }
            .name { font-size:28px; font-weight:700; }
            .title { color:#475569; }
            .meta { text-align:right; font-size:13px; color:#475569; }
            .summary { margin:18px 0; }
            .section { margin-top:16px; }
            .section h3 { margin-bottom:8px; font-size:16px; border-left:4px solid #0ea5a1; padding-left:8px; }
            .skills ul { list-style:disc; padding-left:20px; }
            .exp-item h4 { margin:0; font-size:14px; }
            .exp-item .period { font-size:12px; color:#64748b; }
            .edu-item h4 { margin:0; font-size:14px; }
            @media print { body { padding: 8px } }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div>
                <div class="name">${cv.name}</div>
                <div class="title">${cv.title}</div>
              </div>
              <div class="meta">
                <div>${cv.email}</div>
                <div>${cv.phone}</div>
                <div>${cv.location}</div>
              </div>
            </div>

            <div class="summary">
              <p>${cv.summary}</p>
            </div>

            <div class="section skills">
              <h3>Skills</h3>
              <ul>
                ${skillsHtml}
              </ul>
            </div>

            <div class="section">
              <h3>Experience</h3>
              ${expHtml}
            </div>

            <div class="section">
              <h3>Education</h3>
              ${eduHtml}
            </div>
          </div>
        </body>
      </html>
    `;
  }, [cv]);

  const downloadHtml = () => {
    const blob = new Blob([srcDoc], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${cv.name.replace(/\s+/g, "_") || "cv"}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Card title="Editor CV">
        <div className="space-y-4 mt-2">
          <TextField
            label="Nama"
            id="nama"
            name="nama"
            type="text"
            variant="outline"
            placeholder="Nama"
            value={cv.name}
            onChange={(e) => update("name", e.target.value)}
          />
          <TextField
            label="Posisi"
            id="posisi"
            name="posisi"
            type="text"
            variant="outline"
            placeholder="Posisi"
            value={cv.title}
            onChange={(e) => update("title", e.target.value)}
          />
          <TextField
            label="Email"
            id="email"
            name="email"
            type="email"
            variant="outline"
            placeholder="Email"
            value={cv.email}
            onChange={(e) => update("email", e.target.value)}
          />
          <TextField
            label="Phone"
            id="phone"
            name="phone"
            type="text"
            variant="outline"
            placeholder="Phone"
            value={cv.phone}
            onChange={(e) => update("phone", e.target.value)}
            cleaveOptions={{ numericOnly: true }}
          />
          <TextField
            label="Location"
            id="location"
            name="location"
            type="text"
            variant="outline"
            placeholder="Location"
            value={cv.phone}
            onChange={(e) => update("location", e.target.value)}
          />
          <TextArea
            variant="outline"
            label="Summary"
            value={cv.summary}
            onChange={(e) => update("summary", e.target.value)}
          />
          <TextField
            label="Skills"
            id="skills"
            name="skills"
            type="text"
            variant="outline"
            placeholder="Skills"
            value={cv.skills}
            onChange={(e) => update("skills", e.target.value)}
          />

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Experience</h3>
              <button onClick={() => addArrayItem("experiences")} className="hover:text-primary cursor-pointer">Tambah</button>
            </div>
            {cv.experiences.map((ex: any) => (
              <div key={ex.id} className="border border-dashed border-[#E0E6ED] dark:border-[#253B5C] rounded-md p-2 space-y-2">
                <TextField
                  label="Company"
                  id="company"
                  name="company"
                  type="text"
                  variant="outline"
                  placeholder="Company"
                  value={ex.company}
                  onChange={(e) => updateArrayItem("experiences", ex.id, "company", e.target.value)}
                />
                <TextField
                  label="Role"
                  id="role"
                  name="role"
                  type="text"
                  variant="outline"
                  placeholder="Role"
                  value={ex.role}
                  onChange={(e) => updateArrayItem("experiences", ex.id, "role", e.target.value)}
                />
                <TextField
                  label="Period"
                  id="period"
                  name="period"
                  type="text"
                  variant="outline"
                  placeholder="Period"
                  value={ex.period}
                  onChange={(e) => updateArrayItem("experiences", ex.id, "period", e.target.value)}
                />
                <TextArea
                  variant="outline"
                  label="Desc"
                  value={ex.desc}
                  onChange={(e) => updateArrayItem("experiences", ex.id, "desc", e.target.value)}
                />
                <div className="flex justify-end mt-1">
                  <Button color="danger" onClick={() => removeArrayItem("experiences", ex.id)}>Remove</Button>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Education</h3>
              <button onClick={() => addArrayItem("education")} className="hover:text-primary cursor-pointer">Tambah</button>
            </div>
            {cv.education.map((ed: any) => (
              <div key={ed.id} className="border border-dashed border-[#E0E6ED] dark:border-[#253B5C] rounded-md p-2 space-y-2">
                <TextField
                  label="School"
                  id="school"
                  name="school"
                  type="text"
                  variant="outline"
                  placeholder="School"
                  value={ed.school}
                  onChange={(e) => updateArrayItem("education", ed.id, "school", e.target.value)}
                />
                <TextField
                  label="Degree"
                  id="degree"
                  name="degree"
                  type="text"
                  variant="outline"
                  placeholder="Degree"
                  value={ed.degree}
                  onChange={(e) => updateArrayItem("education", ed.id, "degree", e.target.value)}
                />
                <TextField
                  label="Period"
                  id="period"
                  name="period"
                  type="text"
                  variant="outline"
                  placeholder="Period"
                  value={ed.period}
                  onChange={(e) => updateArrayItem("education", ed.id, "period", e.target.value)}
                />
                <div className="flex justify-end mt-1">
                  <Button color="danger" onClick={() => removeArrayItem("education", ed.id)}>Remove</Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <Button onClick={downloadHtml}>
            Download HTML
          </Button>
          <Button onClick={() => navigator.clipboard?.writeText(srcDoc)}>
            Copy HTML
          </Button>
        </div>
      </Card>

      <div className="lg:col-span-2">
        <Card title="Preview">
          <iframe
            title="CV Preview"
            srcDoc={srcDoc}
            sandbox="allow-same-origin"
            className="w-full h-[100vh] mt-2 border border-[#E0E6ED] dark:border-[#253B5C] rounded"
          />
        </Card>
      </div>
    </div>
  );
}
