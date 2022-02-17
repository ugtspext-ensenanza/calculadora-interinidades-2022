$(document).ready(function (a) {
  function e(e) {
    switch ($numseccion = e.name.substring(4, 7), $numseccion) {
      case "110":
      case "120":
      case "130":
      case "140":
        $mes = parseInt(a("input[name=data" + $numseccion + "x]").val()), $mes = isNaN($mes) ? 0 : $mes, $dia = parseInt(a("input[name=data" + $numseccion + "y]").val()), $dia = isNaN($dia) ? 0 : $dia;
        break;
      case "200":
        $nota = parseFloat(a("input[name=data" + $numseccion + "x]").val().replace(',', '.')), $nota = isNaN($nota) ? 0 : $nota, $numap = parseInt(a("input[name=data" + $numseccion + "y]").val()), $numap = isNaN($numap) ? 0 : $numap;
        break;
      case "310":
        $nota = parseFloat(a("input[name=data" + $numseccion + "x]").val().replace(',', '.')), $nota = isNaN($nota) ? 0 : $nota;
        break;
      case "320":
        $doctor = a("input[name=data" + $numseccion + "b]:checked").val(),$certea = a("input[name=data" + $numseccion + "a]:checked").val(),$certea = ($doctor == 1) ? 0 : $certea,$extdoc = a("input[name=data" + $numseccion + "c]:checked").val(),$pricic = parseInt(a("input[name=data" + $numseccion + "d]").val()), $pricic = isNaN($pricic) ? 0 : $pricic,$segcic = parseInt(a("input[name=data" + $numseccion + "e]").val()), $segcic = isNaN($segcic) ? 0 : $segcic,$grados = parseInt(a("input[name=data" + $numseccion + "f]").val()), $grados = isNaN($grados) ? 0 : $grados,$master = parseInt(a("input[name=data" + $numseccion + "g]").val()), $master = isNaN($master) ? 0 : $master,$certc2 = parseInt(a("input[name=data" + $numseccion + "h]").val()), $certc2 = isNaN($certc2) ? 0 : $certc2,$certc1 = parseInt(a("input[name=data" + $numseccion + "i]").val()), $certc1 = isNaN($certc1) ? 0 : $certc1,$certb2 = parseInt(a("input[name=data" + $numseccion + "j]").val()), $certb2 = isNaN($certb2) ? 0 : $certb2,$certb1 = parseInt(a("input[name=data" + $numseccion + "k]").val()), $certb1 = isNaN($certb1) ? 0 : $certb1,$tituts = parseInt(a("input[name=data" + $numseccion + "l]").val()), $tituts = isNaN($tituts) ? 0 : $tituts;
        break;
      case "330":
        $credit = parseFloat(a("input[name=data" + $numseccion + "x]").val().replace(',', '.')), $credit = isNaN($credit) ? 0 : $credit;
        break;
      case "340":
        $mesex1 = parseInt(a("input[name=data" + $numseccion + "a]").val()), $mesex1 = isNaN($mesex1) ? 0 : $mesex1, $diaex1 = parseInt(a("input[name=data" + $numseccion + "b]").val()), $diaex1 = isNaN($diaex1) ? 0 : $diaex1, $mesex2 = parseInt(a("input[name=data" + $numseccion + "c]").val()), $mesex2 = isNaN($mesex2) ? 0 : $mesex2, $diaex2 = parseInt(a("input[name=data" + $numseccion + "d]").val()), $diaex2 = isNaN($diaex2) ? 0 : $diaex2;
        break;
      case "350":
        $mes = parseInt(a("input[name=data" + $numseccion + "x]").val()), $mes = isNaN($mes) ? 0 : $mes, $dia = parseInt(a("input[name=data" + $numseccion + "y]").val()), $dia = isNaN($dia) ? 0 : $dia;
        break;
      case "360":
        $mesinv1 = parseInt(a("input[name=data" + $numseccion + "a]").val()), $mesinv1 = isNaN($mesinv1) ? 0 : $mesinv1, $diainv1 = parseInt(a("input[name=data" + $numseccion + "b]").val()), $diainv1 = isNaN($diainv1) ? 0 : $diainv1, $mesinv2 = parseInt(a("input[name=data" + $numseccion + "c]").val()), $mesinv2 = isNaN($mesinv2) ? 0 : $mesinv2, $diainv2 = parseInt(a("input[name=data" + $numseccion + "d]").val()), $diainv2 = isNaN($diainv2) ? 0 : $diainv2;
        break;
    }

    switch ($numseccion) {
      case "110":
        $result = .0395 * $mes + .0013 * $dia, $result > 4.750 && ($result = 4.750);
        break;
      case "120":
        $result = .0197 * $mes + .0006 * $dia, $result > 2.375 && ($result = 2.375);
        break;
      case "130":
        $result = .0131 * $mes + .0004 * $dia, $result > 1.583 && ($result = 1.583);
        break;
      case "140":
        $result = .0065 * $mes + .0002 * $dia, $result > .7915 && ($result = .7915);
        break;
      case "200":
        $numap > 3 && ($numap = 3), $result = ($nota * 0.3) + (0.3 * $numap), $result > 3 && ($result = 3);
        break;
      case "310":
        $result = ($nota - 5) * 0.12, $result > .6 && ($result = .6);
        break;
      case "320":
        $result = $certea * 0.375 + $doctor * 0.5 + $extdoc * 0.1 + $pricic * 0.375 + $segcic * 0.375 + $grados * 0.375 + $master * 0.375 + $certc2 * 0.5 + $certc1 * 0.375 + $certb2 * 0.25 + $certb1 * 0.125 + $tituts * 0.125, $result > 0.75 && ($result = 0.75);
        break;
      case "330":
        $result = $credit * 0.02, $result > 1 && ($result = 1);
        break;
      case "340":
        $result = $mesex1 * 0.090 + $diaex1 * 0.003 + $mesex2 * 0.02 + $diaex2 * 0.0006 , $result > 1 && ($result = 1);
        break;
      case "350":
        $result = $mes * 0.0312 + $dia * 0.001 , $result > 0.75 && ($result = 0.75);
        break;
      case "360":
        $result = $mesinv1 * 0.0208 + $diainv1 * 0.0007 + $mesinv2 * 0.0417 + $diainv2 * 0.0014 , $result > 0.75 && ($result = 0.75);
        break;
    }
    0 == $result ? $final = 0 : $final = $result.toFixed(4), a("input[name=result" + $numseccion + "]").val($final), n()
  }

  function n() {
    for (var e = [0, 4.75, 3, 2.25], n = 0, $ = 1; $ <= 3; $++) {
      var i = 0;
      a("input[name^='result" + $ + "']").each(function () {
        i += parseFloat(a(this).val())
      }), 0 == i ? ($final = 0, a("input[name^='maxsec" + $ + "']").hide()) : (i >= e[$] ? (i = e[$], a("input[name^='maxsec" + $ + "']").show()) : a("input[name^='maxsec" + $ + "']").hide(), $final = i.toFixed(4)), a("input[name=totalsec" + $ + "]").val($final), n += i
    }
    $final = 0 == n ? 0 : n.toFixed(4), a("input[name=restotal]").val($final)
  }
  
  a("#calcubaremo").find(".optsino").change(function () {
    $target = a(this).parents(".pregunta").next(".oculto"), $target.find("input:text").val("0"), n(), $target.slideToggle("fast"), a("#calcubaremo div.info:visible").slideUp("fast"), a("#calcubaremo .toggleinfo.activo").removeClass("activo")
  }), a("#calcubaremo").find(".optsinodirecto").change(function () {
    ! function (e) {
      switch ($numseccion = e.attr("name").substring(4, 7), $valor = e.val(), $numseccion) {
        case "370":
          $result = 0.1;
          break;
      }
      0 == $valor ? $final = 0 : 0 == $result ? $final = 0 : $final = $result.toFixed(4);
      a("input[name=result" + $numseccion + "]").val($final), n()
    }(a(this))
  }), a("#calcubaremo").find(".toggleinfo").click(function (e) {
    e.preventDefault(), a(this).toggleClass("activo"), a("#calcubaremo .toggleinfo.activo").not(a(this)).removeClass("activo");
    var n = a(this).attr("rel");
    a("#calcubaremo div.info:visible").not(a(this).parent().children("div.info" + n)).slideUp("fast"), a(this).parent().children("div.info" + n).slideToggle("fast")
  }), a("#calcubaremo").find(".intronum").focus(function () {
    "0" == a(this).val() && a(this).val("")
  }), a("#calcubaremo").find(".intronum").blur(function () {
    "" == a(this).val() && a(this).val("0")
  }), a("#calcubaremo").find(".dias").blur(function () {
    parseInt(a(this).val()) > 30 && (a(this).val("30"), e(this))
  }), a("#calcubaremo").find(".meses").blur(function () {
    parseInt(a(this).val()) > 11 && (a(this).val("11"), e(this))
  }), a("#calcubaremo").find(".max10").blur(function () {
    parseInt(a(this).val()) > 10 && (a(this).val("10"), e(this))
  }), a("#calcubaremo").find(".intronum").keydown(function (e) {
    -1 !== a.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 188, 190]) || /65|67|86|88/.test(e.keyCode) && (!0 === e.ctrlKey || !0 === e.metaKey) || 35 <= e.keyCode && 40 >= e.keyCode || (e.shiftKey || 48 > e.keyCode || 57 < e.keyCode) && (96 > e.keyCode || 105 < e.keyCode) && e.preventDefault()
  }), a("input[name^='data']").change(function () {
    e(this)
  })
});