<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet
    version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9">

    <xsl:output method="html" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>Heatwave Prediction - XML Sitemap</title>

                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background: #f5f7fa;
                        margin: 0;
                        padding: 40px;
                        color: #1f2937;
                    }

                    .container {
                        max-width: 1000px;
                        margin: auto;
                        background: white;
                        padding: 30px;
                        border-radius: 12px;
                        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
                    }

                    h1 {
                        margin-top: 0;
                        color: #111827;
                    }

                    p {
                        color: #6b7280;
                    }

                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 25px;
                    }

                    th {
                        background: #111827;
                        color: white;
                        padding: 14px;
                        text-align: left;
                    }

                    td {
                        padding: 13px;
                        border-bottom: 1px solid #e5e7eb;
                    }

                    tr:hover {
                        background: #f9fafb;
                    }

                    a {
                        color: #2563eb;
                        text-decoration: none;
                    }

                    a:hover {
                        text-decoration: underline;
                    }

                    .count {
                        display: inline-block;
                        background: #e5e7eb;
                        padding: 6px 12px;
                        border-radius: 20px;
                        font-size: 14px;
                        margin-top: 5px;
                    }
                </style>
            </head>

            <body>
                <div class="container">

                    <h1>Heatwave Prediction</h1>

                    <p>
                        XML Sitemap for the Heatwave Prediction website.
                    </p>

                    <div class="count">
                        Pages listed:
                        <xsl:value-of select="count(sm:urlset/sm:url)"/>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Website URL</th>
                            </tr>
                        </thead>

                        <tbody>
                            <xsl:for-each select="sm:urlset/sm:url">
                                <tr>
                                    <td>
                                        <xsl:value-of select="position()"/>
                                    </td>

                                    <td>
                                        <a href="{sm:loc}">
                                            <xsl:value-of select="sm:loc"/>
                                        </a>
                                    </td>
                                </tr>
                            </xsl:for-each>
                        </tbody>
                    </table>

                </div>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
