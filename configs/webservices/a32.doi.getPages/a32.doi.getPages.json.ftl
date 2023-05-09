{
    "feed": {
        "entry": {
            "pages": <#if subject.findValue("page")??>"${subject.findValue("page")?json_string}"<#else>""</#if>
        }
    }
}
