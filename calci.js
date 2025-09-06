let text;
      function fun(btn) {
        document.getElementById("user_data").innerHTML += btn.innerHTML;
        text += document.getElementById("user_data").innerHTML;
      }

      function del() {
        text = document.getElementById("user_data");
        let s_text = text.innerHTML.trim();
        l = s_text.length;
        let last_l = s_text.charAt(l - 1);
        modified_text = s_text.replace(last_l, "");
        text.innerHTML = modified_text;
      }
      function reset() {
        document.getElementById("user_data").innerHTML = "";
      }
      function result() {
        let d = document.getElementById("user_data");
        let t = d.innerHTML.trim();
        //document.writeln(t.length);
        let r1 = /(?<=[0-9])[+\-*\\/](?=\-|[0-9])/;
        let r2 = /(?<=[0-9])[+\-*\\/](?=\-|[0-9])/g;
        let a = t.split(r1);
        let opr = t.match(r2);
        console.log(opr);
        console.log(a);
        for (let i = 0; i < opr.length; i++) {
          console.log(i);
          if (opr[i] === "*") {
            let res = a[i] * a[i + 1];
            a.splice(i, 2);
            a.splice(i, 0, res);
            opr.splice(i, 1);
            i--;
          }
          if (opr[i] === "/") {
            //	System.out.println("...index"+i);
            let res = a[i] / a[i + 1];
            a.splice(i, 2);
            a.splice(i, 0, res);
            opr.splice(i, 1);
            i--;
          }
        }
        console.log(opr);
        console.log(a);
        console.log("**********");
        while (opr.length !== 0) {
          let o = opr[0];
          if (o === "+") {
            let res = Number(a[0]) + Number(a[1]);
            a.splice(0, 2);
            a.splice(0, 0, res);
            opr.shift();
            console.log(a);
            console.log(opr);
          } else {
            let res = a[0] - a[1];
            a.splice(0, 2);
            a.splice(0, 0, res);
            opr.shift();
            console.log(a);
            console.log(opr);
          }
        }
        d.innerHTML = a[0];
      }
      