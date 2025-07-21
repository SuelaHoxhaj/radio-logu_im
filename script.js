function llogarit() {
    const ct = parseInt(document.getElementById('ct').value) || 0;
    const xray = parseInt(document.getElementById('xray').value) || 0;
    const mri = parseInt(document.getElementById('mri').value) || 0;

    const totalDose = (ct * 10) + (xray * 1.5) + (mri * 0); // MRI pa rrezatim
    let rreziku = "i ulët";
    if (totalDose > 50) rreziku = "i lartë";
    else if (totalDose > 20) rreziku = "mesatar";

    document.getElementById('rezultati').innerText = 
        `Doza totale: ${totalDose.toFixed(1)} mSv – Rreziku është ${rreziku}`;
}
