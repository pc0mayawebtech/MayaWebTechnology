const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb' }));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

const sendEmail = ({ fullname, number, mobile, cName, radiotick1, radiotick2, radiotick3, radiotick4, email, addinfo,Message }) => {
    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'pawan30jul@gmail.com',
                pass: 'kzke jjso hztl lsvm',
            }
        });

        const mail_configs = {
            from: 'email',
            to: 'mayawebtech2@gmail.com',
            subject: 'New Form Submission',
            text: `Full Name: ${fullname}\nPhone Number: ${number}\nEmail: ${email}\nAdditional Info: ${addinfo}\nMobile:${mobile}\nCName:${cName}\nradioTick1:${radiotick1}\nradioTick2:${radiotick2}\nradioTick3:${radiotick3}\nradioTick4:${radiotick4}\nMessage:${Message}`,
        };

        transporter.sendMail(mail_configs, (error, info) => {
            if (error) {
                return reject({ message: `An error occurred: ${error.message}` });
            }

            console.log(`Email sent: ${info.response}`);
            return resolve({ message: `Email sent successfully` });
        });
    });
};
app.get('/maya', (req, res) => {
    sendEmail(req.query)
        .then((response) => res.send(response.message))
        .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => {
    console.log(`Nodemailer is listening on: ${port}`);
});
