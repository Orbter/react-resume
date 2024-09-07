import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const downloadDivAsPDF = async (divRef) => {
  const canvas = await html2canvas(divRef.current);
  const imgData = canvas.toDataURL('image/png');

  const pdf = new jsPDF('p', 'mm', 'a4');
  const imgWidth = 210; // A4 page width in mm
  const imgHeight = (canvas.height * imgWidth) / canvas.width; // Auto height

  pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
  pdf.save('resume.pdf');
};
